import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed w-full top-0 p-6 markdown-body">
      <Link href="/">Heim</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link>
    </nav>
  );
}
