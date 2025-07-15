"use client";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
  return (
    <header className="w-full border-b border-transparent shadow-md shadow-black/10 backdrop-blur-md z-50   bg-emerald-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-4 transition-transform group-hover:scale-105">
            <Image
              src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752601311/naturalesa-w1_vdd6fh.png"
              alt="Amazonia Logo"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-10 text-white text-lg sm:text-xl font-light ">
            {[
              { label: "Home", href: "/" },
              { label: "Store", href: "/store" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-md hover:text-green-800 hover:bg-black/5 transition-colors duration-200 font-serif"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
