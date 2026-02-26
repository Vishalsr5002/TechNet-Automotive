"use client";
import { useRouter } from "next/navigation";
import { Squares2X2Icon, HeartIcon, ClockIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { CarIcon } from "lucide-react";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      
      <h1 className="text-2xl font-bold text-blue-900">
        TechNet Automotive
      </h1>
      <div className="flex items-center gap-6 text-gray-600">
        <Squares2X2Icon className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        <CarIcon className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        <HeartIcon 
          className="w-6 h-6 cursor-pointer hover:text-red-500"
          onClick={() => router.push("/favorites")}/>
        <ClockIcon className="w-6 h-6 cursor-pointer hover:text-blue-600" />
        <SparklesIcon className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
      </div>
    </header>
  );
}
