import Link from "next/link";

export default function Nav() {
  return (
    <header>
      <nav>
        <Link href="/"> Heim </Link>
        <div>
          <Link href="/login"> Login </Link>
          <Link href="/signup"> Sign up </Link>
        </div>
      </nav>
    </header>
  );
}
