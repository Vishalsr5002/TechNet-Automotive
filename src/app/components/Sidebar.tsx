"use client";

import { useRouter } from "next/navigation";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import { Power, ShareIcon } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    router.push("/");
  };
  return (
    <aside className="w-64 bg-gray-700 text-white shadow-xl h-screen-auto p-6 flex flex-col">
      <ul className="space-y-6 text-gray-300">        
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <HomeIcon className="w-6 h-6" />
          Dashboard
        </li>
        <li className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <ShareIcon className="w-6 h-6" />
          Share Animation
        </li>
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <WrenchScrewdriverIcon className="w-6 h-6" />
          Settings
        </li>
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <LanguageIcon className="w-6 h-6" />
          Languages
        </li>
        <li
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 cursor-pointer">
          <Power className="w-6 h-6" />
          Logout
        </li>
      </ul>
    </aside>
  );
}
