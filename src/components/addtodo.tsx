"use client";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { addTodo } from "~/server/queries";

export default function AddTodo() {
  const [input, setInput] = useState("");

  async function handleClick() {
    if (input === "") return;
    await addTodo(input, false);
    setInput("");
  }

  return (
    <div className="flex items-center space-x-2 md:justify-center">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-primary md:max-w-2xl md:text-base"
      />
      <Button
        onClick={handleClick}
        className="rounded-md px-4 py-2 text-sm font-medium md:px-6 md:py-3 md:text-base"
      >
        Add
      </Button>
    </div>
  );
}
