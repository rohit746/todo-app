"use server";

import { eq } from "drizzle-orm";
import { db } from "./db";
import { todos } from "./db/schema";
import { redirect } from "next/navigation";

export async function getMyTodos() {
  const todos = await db.query.todos.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return todos;
}

export async function deleteTodo(id: number) {
  await db.delete(todos).where(eq(todos.id, id));
  redirect("/");
}
