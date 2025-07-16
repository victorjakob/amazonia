import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-emerald-50 border-t border-emerald-100 mt-16 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <Image
            src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752601471/natureza_juyudn.png"
            alt="Amazonia Logo"
            width={60}
            height={60}
            className="mb-2"
          />
          <span className="text-lg font-bold text-green-900">
            Natureza Incense
          </span>
          <span className="text-sm text-gray-600 max-w-xs">
            Sacred tools and incense from the Amazon. Ethically sourced,
            supporting indigenous communities and the rainforest.
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col items-center gap-2 md:gap-4">
          <Link
            href="/"
            className="text-green-900 hover:text-emerald-700 font-medium transition"
          >
            Home
          </Link>
          <Link
            href="/store"
            className="text-green-900 hover:text-emerald-700 font-medium transition"
          >
            Store
          </Link>
          <Link
            href="/contact"
            className="text-green-900 hover:text-emerald-700 font-medium transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Natureza Incense. All rights reserved.
      </div>
    </footer>
  );
}
