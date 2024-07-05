"use client";

import type { todoType } from "~/types/todoType";
import AddTodo from "./addtodo";
import Todo from "./todo";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Todos({ todos }: { todos: todoType[] }) {
  const [listRef] = useAutoAnimate();
  return (
    <>
      <AddTodo />
      <div className={"space-y-2 md:space-y-4"} ref={listRef}>
        {todos.map((todo) => (
          <Todo
            todo={todo.todo}
            completed={todo.completed}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </div>
    </>
  );
}
