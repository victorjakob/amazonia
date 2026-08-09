import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-sand border-t border-line">
      <div className="u-shell py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Identity */}
          <div className="md:col-span-6 lg:col-span-5">
            <Image
              src="https://res.cloudinary.com/dy8q4hf0k/image/upload/v1752601471/natureza_juyudn.png"
              alt="Amazonia"
              width={120}
              height={120}
              className="h-14 w-auto object-contain"
            />
            <p className="font-display mt-5 text-2xl text-forest-800">
              Natureza Incense
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Sacred tools and incense from the Amazon. Ethically sourced,
              supporting indigenous communities and the rainforest.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer"
            className="md:col-span-3 lg:col-span-3 lg:col-start-9"
          >
            <ul className="space-y-3">
              {NAV.map((entry) => (
                <li key={entry.href}>
                  <Link
                    href={entry.href}
                    className="u-link text-[0.9375rem] text-ink-soft hover:text-forest-700 transition-colors duration-300"
                  >
                    {entry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-line-strong/60">
          <p className="u-tracked text-muted">
            &copy; {new Date().getFullYear()} J.N.M.O Nukini. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
