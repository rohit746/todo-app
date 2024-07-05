import { db } from "./db";

export async function getMyTodos() {
  const todos = await db.query.todos.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return todos;
}
