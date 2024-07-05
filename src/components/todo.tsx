"use client";

import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { TrashIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import React from "react";

export default function Todo({
  todo,
  completed,
}: {
  todo: string;
  completed: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-md bg-card p-4 shadow transition-all duration-300 hover:scale-[1.02] hover:shadow-lg md:p-6",
        completed ? "text-muted-foreground line-through" : "",
      )}
    >
      <div className="flex items-center space-x-4">
        <Checkbox defaultChecked={false} checked={completed} />
        <label className="text-lg font-medium md:text-xl">{todo}</label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full text-red-500 hover:bg-muted/50"
      >
        <TrashIcon className="h-4 w-4 md:h-5 md:w-5" />
      </Button>
    </div>
  );
}
