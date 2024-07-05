import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyTodos } from "~/server/queries";
import Todos from "~/components/todos";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const todos = await getMyTodos();
  return (
    <main className={"flex-1 space-y-4 p-6 md:space-y-6 md:p-12"}>
      <SignedIn>
        <Todos todos={todos} />
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
