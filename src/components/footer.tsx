import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between bg-muted px-6 py-4 text-muted-foreground">
      <p className="text-sm">&copy; {year} Todo List. All rights reserved.</p>
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-sm hover:underline" prefetch={false}>
          Privacy Policy
        </Link>
        <Link href="/" className="text-sm hover:underline" prefetch={false}>
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
