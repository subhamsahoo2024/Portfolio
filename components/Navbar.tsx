"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-6 px-8 flex justify-between items-center max-w-6xl mx-auto z-50 relative">
      <Link
        href="/"
        className="text-xl font-bold tracking-tighter bg-blue-900 rounded-full px-3 py-1 hover:text-blue-500 transition"
      >
        S
      </Link>

      <div className="flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-medium transition-colors hover:text-blue-400 ${
              pathname === link.href ? "text-blue-500" : "text-gray-400"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
