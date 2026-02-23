"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white px-10 py-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold tracking-wide">
          TechNet Automotive
        </h1>
        <div className="space-x-6 flex items-center">
          <button
            onClick={() => setShowLogin(true)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
          >
            Login
          </button>
          <button className="hover:text-blue-400 transition">
            Contact Us
          </button>
          <button className="hover:text-blue-400 transition">
            Learn More
          </button>
        </div>
      </header>
      {/* Front*/}
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-start items-center text-center px-6 pt-40 text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a')",
        }}
      >
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
          Automotive Service Platform
        </h1>

        <p className="max-w-2xl italic text-3xl text-gray-200">
          Professional automotive diagnostic and maintenance platform
          designed for modern vehicle service management.
        </p>
      </div>

      {/* Core Services */}
      <section className="bg-white text-gray-800 py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Services Done by TechNet
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Engine */}
          <div className="group p-10 rounded-xl shadow-lg border-b-5 border-blue-300 bg-white text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
            <video
              src="/engine.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-60 object-cover rounded-lg mb-4"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
            <h3 className="text-xl font-bold mb-3">Engine System</h3>
            <p className="text-gray-600">
              Complete engine diagnostics and performance monitoring.
            </p>
          </div>
          {/* Brake */}
          <div className="group p-10 rounded-xl shadow-lg border-b-5 border-yellow-300 bg-white text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
            <video
              src="/brake.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-60 object-cover rounded-lg mb-4"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />

            <h3 className="text-xl font-bold mb-3">Brake System</h3>
            <p className="text-gray-600">
              Advanced braking inspection and repair management.
            </p>
          </div>

          {/* Fluid */}
          <div className="group p-10 rounded-xl shadow-lg border-b-5 border-red-300 bg-white text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
            <video
              src="/fluid.mp4"
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-60 object-cover rounded-lg mb-4"
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />

            <h3 className="text-xl font-bold mb-3">Fluid Maintenance</h3>
            <p className="text-gray-600">
              Smart tracking of all fluid replacement schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 text-gray-800 py-20 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 border-l-5 border-yellow-400 bg-white shadow rounded-lg hover:shadow-xl transition">
            Real-time Dashboard
          </div>
          <div className="p-6 border-l-5 border-red-400 bg-white shadow rounded-lg hover:shadow-xl transition">
            Service Tracking
          </div>
          <div className="p-6 border-l-5 border-blue-400 bg-white shadow rounded-lg hover:shadow-xl transition">
            Automated Alerts
          </div>
          <div className="p-6 border-l-5 border-green-400 bg-white shadow rounded-lg hover:shadow-xl transition">
            Vehicle History Records
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl w-[400px] relative shadow-2xl">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Login
            </h2>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter Email"
                required
                className="w-full text-black p-3 border rounded-lg mb-4"
              />

              <div className="relative mb-6">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  required
                  className="w-full text-black p-3 border rounded-lg pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}