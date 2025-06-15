import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center w-full bg-amber-500">
      <img src="/icon.png" className="w-16" />
      <Link href="/">
        <span className="font-bold">LocalPick</span>
      </Link>
    </div>
  );
}
