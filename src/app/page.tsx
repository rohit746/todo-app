import Todo from "~/components/todo";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import AddTodo from "~/components/addtodo";
import { getMyTodos } from "~/server/queries";

export default async function HomePage() {
  const todos = await getMyTodos();
  return (
    <main className={"flex-1 space-y-4 p-6 md:space-y-6 md:p-12"}>
      <SignedIn>
        <AddTodo />
        {todos.map((todo) => (
          <div key={todo.id} className={"space-y-2 md:space-y-4"}>
            <Todo todo={todo.todo} completed={todo.completed} />
          </div>
        ))}
      </SignedIn>
      <SignedOut>
        <h1
          className={"flex items-center justify-center text-3xl font-semibold"}
        >
          Please Login or Signup to add Todos.
        </h1>
      </SignedOut>
    </main>
  );
}
