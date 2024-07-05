"use server";

import { and, eq } from "drizzle-orm";
import { db } from "./db";
import { todos } from "./db/schema";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function getMyTodos() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  return db.query.todos.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
}

export async function addTodo(todo: string, completed: boolean) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db.insert(todos).values({
    userId: user.userId,
    todo: todo,
    completed: completed,
  });

  revalidatePath("/");
}

export async function deleteTodo(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(todos)
    .where(and(eq(todos.id, id), eq(todos.userId, user.userId)));

  revalidatePath("/");
}
