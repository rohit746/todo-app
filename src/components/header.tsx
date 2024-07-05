import { CheckIcon } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-primary px-6 py-4 text-primary-foreground shadow">
      <div className="flex items-center space-x-2">
        <CheckIcon className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Todo List</h1>
      </div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
