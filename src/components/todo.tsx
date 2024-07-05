"use client";

import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import React from "react";
import { deleteTodo, toggleTodo } from "~/server/queries";

export default function Todo({
  id,
  todo,
  completed,
}: {
  id: number;
  todo: string;
  completed: boolean;
}) {
  async function handelDelete(id: number) {
    await deleteTodo(id);
  }

  async function handelComplete(id: number) {
    await toggleTodo(id);
  }

  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-md bg-card p-4 shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:p-6",
        completed ? "text-muted-foreground line-through" : "",
      )}
    >
      <div className="flex items-center space-x-4">
        <Checkbox
          defaultChecked={false}
          checked={completed}
          onCheckedChange={() => handelComplete(id)}
        />
        <label className="text-lg font-medium md:text-xl">{todo}</label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-red-500 hover:bg-muted/50"
        onClick={() => handelDelete(id)}
      >
        <TrashIcon className="h-4 w-4 md:h-5 md:w-5" />
      </Button>
    </div>
  );
}
