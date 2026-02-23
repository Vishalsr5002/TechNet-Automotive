"use client";
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  LanguageIcon,
} from "@heroicons/react/24/solid";
import { Power } from "lucide-react";
//import { DynamicIcon } from 'lucide-react/dynamic';
//const page = () => (
  //<DynamicIcon name="camera" color="red" size={48} />);
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-700 text-white shadow-xl h-screen p-6 flex flex-col">
      <ul className="space-y-6 text-gray-300">
        
        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <HomeIcon className="w-6 h-6" />
          Dashboard 
        </li>

        <li className="flex divide-amber-600 items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <WrenchScrewdriverIcon className="w-6 h-6" />
          Settings
        </li>

        <li className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <LanguageIcon className="w-6 h-6" />
          Languages
        </li>

        <li className="flex items-left gap-3 p-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-400 cursor-pointer">
          <Power className="w-6 h-6" />
          Logout
        </li>
      </ul>
    </aside>
  );
}
