"use client";
interface HeaderProps {
  onLoginClick: () => void;
}
export default function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-60 w-full bg-black/70 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center">
      
      {/* Left Side */}
      <h1 className="text-2xl font-bold tracking-wide">
        TechNet Automotive
      </h1>
      {/* Right Side */}
      <div className="space-x-6 flex items-center">
        <button
          onClick={onLoginClick}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 left-100 rounded-lg transition z-50"
        >
          Logout
        </button>

        <button className="hover:text-blue-400 transition">
          Contact Us
        </button>

        <button className="hover:text-blue-400 transition">
          Learn More
        </button>
      </div>
    </header>
  );
}
