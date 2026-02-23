"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";

import {
  TruckIcon,
  CogIcon,
  WrenchIcon,
  FireIcon,
  Squares2X2Icon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  CarFrontIcon,
  CarIcon,
  FanIcon,
  FuelIcon,
  HistoryIcon,
  Scale3DIcon,
  ThermometerSnowflake,
  ZapIcon,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const services = [
    { title: "Brake System", icon: <TruckIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Steering System", icon: <CogIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Suspension System", icon: <WrenchIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Engine", icon: <FireIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Cooling System", icon: <FanIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Heating/AC", icon: <ThermometerSnowflake className="w-10 h-10 text-blue-700" /> },
    { title: "Fuel System", icon: <FuelIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Electrical System", icon: <ZapIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Transmission", icon: <Scale3DIcon className="w-10 h-10 text-blue-700" /> },
    { title: "Maintenance", icon: <CarFrontIcon className="w-10 h-10 text-blue-700" /> },
  ];

  const subCategories: any = {
    "Brake System": [
      {
        title: "Brake Pads",
        slug: "brake-pads",
        img: "https://thumbs.dreamstime.com/b/car-brake-pad-line-icon-parts-concept-vector-graphics-wheel-sign-white-background-style-mobile-web-design-409606337.jpg",
      },
      {
        title: "Vacuum Booster",
        slug: "vacuum-booster",
        img: "https://automantransmission.com/wp-content/uploads/2024/02/Brake-Booster-GettyImages-1192741242-1024x1024.webp",
      },
      {
        title: "Disc Brake",
        slug: "disc-brake",
        img: "https://thumbs.dreamstime.com/b/brake-disc-caliper-white-vector-illustration-50447807.jpg",
      },
      {
        title: "Brake Rotor",
        slug: "brake-rotor",
        img: "https://geobrakes.com/blogs/wp-content/uploads/2023/10/Rusty-brake-rotors.jpg",
      },
    ],

    "Steering System": [
      {
        title: "Steering Gear",
        slug: "steering-gear",
        img: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/1_How_to_Replace_a_Steering_Rack_Gearbox_a_steering_rack",
      },
      {
        title: "Power Steering Unit",
        slug: "power-steering-unit",
        img: "https://i.gaw.to/content/photos/26/98/269855_La_petite_histoire_de_la_direction_assistee.jpg",
      },
    ],
  };

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-blue-900">
            TechNet Automotive Dashboard
          </h1>
          <div className="flex-1 flex justify-center px-8">
            <input
              type="text"
              placeholder="Search for Services"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-gray-900 w-full max-w-xl px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 text-gray-600">

            <Squares2X2Icon className="w-6 h-6 cursor-pointer hover:text-blue-600" />
            <CarIcon 
              className="w-6 h-6 cursor-pointer hover:text-purple-600"
              onClick={() => router.push("/sample")} />

            <HeartIcon
              className="w-6 h-6 cursor-pointer hover:text-red-500"
              onClick={() => router.push("/favorites")} />
            <HistoryIcon
              className="w-6 h-6 cursor-pointer hover:text-blue-500"
              onClick={() => router.push("/history")}/>
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/630/551/non_2x/profile-icon-symbol-design-illustration-vector.jpg"
              alt="User"
              onClick={() => router.push("/profile")}
              className="w-8 h-8 rounded-full object-cover cursor-pointer border-2 border-indigo-500" />
          </div>
        </header>
        {/* Main */}
        <main className="p-8 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div key={index}>
                {/* Main Card */}
                <div
                  onClick={() => {
                    if (subCategories[service.title]) {
                      setSelectedCategory(
                        selectedCategory === service.title
                          ? null
                          : service.title
                      );
                    }
                  }}
                  className="cursor-pointer transform hover:-translate-y-2 transition duration-300">
                  <DashboardCard
                    title={service.title}
                    icon={service.icon}
                  />
                </div>

                {selectedCategory === service.title &&
                  subCategories[service.title] && (
                    <div className="mt-6 flex gap-6 items-start">
                      {subCategories[service.title].map((item: any) => (
                        <div
                          key={item.slug}
                          onClick={() =>
                            router.push(`/products/${item.slug}`)
                          }
                          className="flex-1 min-w-[200px] max-w-[250px] bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-32 object-cover rounded-t-xl"
                          />
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-700">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
