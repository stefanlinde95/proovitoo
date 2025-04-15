"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-red-700 bg-red-600 shadow-md">
      <div className="container mx-auto overflow-x-hidden">
        <div
          className={`w-full flex items-center py-4 px-2 gap-x-2 transition-transform duration-300 ease-out ${
            isHome ? "-translate-x-8" : "translate-x-0"
          }`}
        >
          <div className="w-8 flex items-center justify-center">
            <Link
              href="/"
              className={`rounded-full items-center justify-center hover:bg-neutral-100/20 duration-300 ease-out transition-all ${
                isHome ? "hidden" : "inline-flex"
              }`}
              aria-label="Tagasi avalehele"
              title="Tagasi avalehele"
            >
              <ChevronLeftIcon className="size-6 text-neutral-100" />
            </Link>
          </div>
          <div className="w-full text-lg lg:text-xl font-bold text-white">
            Eesti palgaturu andmete analüüs
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
