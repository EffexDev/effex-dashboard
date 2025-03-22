"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center text-lg p-5">
      <nav>
        <ul className="flex space-x-4 ">
          {[
            { name: "Home", path: "/" },
            { name: "Effex UI", path: "/effexui" },
          ].map(({ name, path }) => (
            <li key={path}>
              <Link
                href={path}
                className={`p-2 hover:bg-[#5a345f] hover:text-white ease-in-out hover:scale-110 ${
                  pathname === path
                    ? "bg-[#331E36]  text-white"
                    : "text-gray-700"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
