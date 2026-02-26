"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Footer from "../components/Footer";
//import { useAppContext } from "../context/AppContext";
import { ArrowLeft, LoaderIcon, LoaderPinwheelIcon } from "lucide-react";
import {
  CogIcon,
  WrenchIcon,
  FireIcon,
  Squares2X2Icon,
  HeartIcon,
} 
from "@heroicons/react/24/outline";
import {
  CarFrontIcon,
  CarIcon,
  FanIcon,
  FuelIcon,
  HistoryIcon,
  Scale3DIcon,
  ThermometerSnowflake,
  ZapIcon,
} 
from "lucide-react";
const productData: any = {
  "brake-pads": {
    title: "Brake Pads",
    slug: "brake-pads",
    img: "https://thumbs.dreamstime.com/b/car-brake-pad-line-icon-parts-concept-vector-graphics-wheel-sign-white-background-style-mobile-web-design-409606337.jpg",
    video: "/brake.mp4",
    description:
      "Brake pads create friction against the brake rotor to slow and stop the vehicle safely.",
  },
  "vacuum-booster": {
    title: "Vacuum Booster",
    slug: "vacuum-booster",
    img: "https://automantransmission.com/wp-content/uploads/2024/02/Brake-Booster-GettyImages-1192741242-1024x1024.webp",
    video: "/vacuum.mp4",
    description:
      "A car vacuum booster (or vacuum brake booster) is a safety component in a vehicle's braking system that uses vacuum pressure, typically from the engine intake manifold, to multiply the physical force applied to the brake pedal. It reduces the necessary driver effort, allowing for safer, more efficient, and easier braking",
  },
  "disc-brake": {
    title: "Disc Brake",
    slug: "disc-brake",
    img: "https://thumbs.dreamstime.com/b/brake-disc-red-calliper-racing-car-26609292.jpg",
    video: "/discbrake.mp4",
    description:
      "Disc brake system uses friction to slow down and stop the vehicle.",
  },
  "steering-gear": {
    title: "Steering Gear",
    slug: "steering-gear",
    img: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/1_How_to_Replace_a_Steering_Rack_Gearbox_a_steering_rack",
    video: "/Steeringnew.mp4",
    description:
      "Steering gear converts steering wheel movement into wheel turning motion. The mechanical system and process that allows a driver to control a vehicle's direction by turning the front wheels, facilitating turns and maintaining straight-line stability. It converts the rotational motion of the steering wheel into angular movement of the wheels, providing responsiveness, stability, and handling control.",
  },
  "power-steering-pump": {
    title: "Power Steering Pump",
    slug: "power-steering-pump",
    img: "steering pump.jpg",
    video: "/power.mp4",
    description:
      "Power steering pump provides hydraulic pressure to assist in steering.",
  },
  "steering-rack": {
    title: "Steering Rack",
    slug: "steering-rack",
    img: "steeringrack.jpg",
    video: "/steeringrack.mp4",
    description:
      "Steering rack is a key component of the steering system that helps convert rotational motion into linear motion.",   
  }
};
export default function Dashboard() {
  const [mode, setmode]=useState<"Interactive"|"Narrated">("Interactive");
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [userFavorites, setUserFavorites] = useState<any[]>([]);
  const router = useRouter();
  //const { favorites, addToFavorites, removeFromFavorites, addToHistory } = useAppContext();
  const [search, setSearch] =useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null); 
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeChapter, setActiveChapter] = useState<any>(null);
  const vacuumChapters = [
  { label: "Atmospheric Air", start: 3, end: 8 },
  { label: "Vacuum created by engine", start: 9, end: 15 },
  { label: "Diaphragm pulled by vacuum", start: 16, end: 20 },
];
const steeringChapters = [
  { label: "Rough Steering", start: 5, end: 19 },
  { label: "Internal Steal Wear", start: 20, end: 26 },
  { label: "Fluid Leak", start: 27, end: 34 },
];
const getChapters = () => {
  if (!selectedProduct) return [];
  if (selectedProduct.slug === "vacuum-booster") {
    return vacuumChapters;
  }
  if (selectedProduct.slug === "steering-gear") {
    return steeringChapters;
  }
  return [];
};
  //const [currentUser, setCurrentUser] = useState<string | null>(null);
  useEffect(() => {
  const storedUser = localStorage.getItem("currentUser");
  if (!storedUser) {
    router.push("/");
    return;
  }
  setCurrentUser(storedUser);
  const favKey = `favorites_${storedUser}`;
  const storedFavs = JSON.parse(localStorage.getItem(favKey) || "[]");
  setUserFavorites(storedFavs);
}, []);
  const services = [
    { title: "Brake System", icon: <LoaderPinwheelIcon className="w-10 h-10 text-blue-700" /> },
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
      { title: "Brake Pads", slug: "brake-pads" },
      { title: "Vacuum Booster", slug: "vacuum-booster" },
      { title: "Disc Brake", slug: "disc-brake" },
    ],
    "Steering System": [
      { title: "Steering Gear", slug: "steering-gear" },
      { title: "Power Steering Pump", slug: "power-steering-pump" },
      { title: "Steering Rack", slug: "steering-rack" },
    ],
  };
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );
  const playChapter = (chapter: any) => {
  if (!videoRef.current) return;
  setActiveChapter(chapter);
  videoRef.current.currentTime = chapter.start;
  videoRef.current.play();
};
const handleTimeUpdate = () => {
  if (!videoRef.current || !activeChapter) return;
  if (videoRef.current.currentTime >= activeChapter.end) {
    videoRef.current.currentTime = activeChapter.start;
    videoRef.current.play();
  }
};
const resetVideo = () => {
  if (!videoRef.current) return;

  setActiveChapter(null);
  videoRef.current.currentTime = 0;
  videoRef.current.play();
};
  const toggleFavorite = (product: any) => {
  if (!currentUser) return;
  const favKey = `favorites_${currentUser}`;
  const isFav = userFavorites.some((item) => item.slug === product.slug);
  let updatedFavs: any[];
  if (isFav) {
    updatedFavs = userFavorites.filter(
      (item) => item.slug !== product.slug
    );
  } else {
    updatedFavs = [...userFavorites, product];
  }
  setUserFavorites(updatedFavs);
  localStorage.setItem(favKey, JSON.stringify(updatedFavs));
};
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="relative z-50 flex items-center justify-between px-8 py-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold text-blue-900">
            TechNet Automotive Dashboard
          </h1>
          <div className="flex-1 flex items-center justify-center gap-6 px-8">
            <input
                type="text"
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-gray-900 w-full max-w-lg px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500"/>
                <div className="flex items-center">
                  <div className="relative flex bg-white border-2 border-blue-500 rounded-full overflow-hidden">  
                    <button
                    onClick={() => setmode("Interactive")}
                    className={`px-10 py-2 text-sm font-semibold transition-all duration-300 ${
                      mode === "Interactive"
                      ? "bg-blue-500 text-white"
                      : "text-blue-500 bg-white"}`}
                      style={{
                        clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",}}>
                          Interactive
                          </button>
                          <button
                          onClick={() => setmode("Narrated")}
                          className={`px-10 py-2 text-sm font-semibold transition-all duration-300 -ml-6 ${
                            mode === "Narrated"
                            ? "bg-blue-500 text-white"
                            : "text-blue-500 bg-white"
                          }`}
                          style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)",}}>
                              Narrated
                              </button>
                              </div>
                              </div>
          <div className="flex items-center gap-6 text-gray-600">
            <Squares2X2Icon className="w-6 h-6 cursor-pointer hover:text-blue-600"/>
            <CarIcon
              className="w-6 h-6 cursor-pointer hover:text-purple-600"
              onClick={() => router.push("/sample")}/>
            <HeartIcon
              className="w-6 h-6 cursor-pointer hover:text-red-500"
              onClick={() => router.push("/favorites")}/>
            <HistoryIcon
              className="w-6 h-6 cursor-pointer hover:text-blue-500"
              onClick={() => router.push("/history")}/>
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/630/551/non_2x/profile-icon-symbol-design-illustration-vector.jpg"
              alt="User"
              onClick={() => router.push("/profile")}
              className="w-8 h-8 rounded-full object-cover cursor-pointer border-2 border-indigo-500"/>
          </div>
                </div>
        </header>
        <main className="p-8 flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service, index) => (
              <div key={index}>
                <div
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === service.title
                        ? null
                        : service.title
                    )
                  }
                  className="cursor-pointer hover:-translate-y-2 transition duration-300" >
                  <DashboardCard title={service.title} icon={service.icon} />
                </div>
                {selectedCategory === service.title && subCategories[service.title] && (
                    <div className="mt-6 flex w-100 h-50 gap-6">
                      {subCategories[service.title].map((item: any) => (
                        <div
                          key={item.slug}
                          onClick={() => {
                            const product = productData[item.slug];
                            setSelectedProduct(product);
                            if (currentUser) {
                              const historyKey = `history_${currentUser}`;
                              const existingHistory = JSON.parse(
                                localStorage.getItem(historyKey) || "[]");
                                const filteredHistory = existingHistory.filter(
                                  (item: any) => item.slug !== product.slug
                                );
                                const updatedHistory = [product, ...filteredHistory];
                                localStorage.setItem(historyKey, JSON.stringify(updatedHistory));}
                            }}
                          className="w-56 bg-gray-200 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                          <img
                            src={productData[item.slug].img}
                            alt={item.title}
                            className="w-full h-32 object-cover rounded-t-xl"/>
                          <div className="p-4">
                            <h3 className="text-sm font-semibold text-gray-800">
                              {item.title}
                            </h3>
                          </div>
                        </div>))}
                    </div>
                  )}
              </div>
            ))}
          </div>
          {selectedProduct && (
            <div className="fixed inset-0 flex items-center justify-center z-[100]">
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setSelectedProduct(null)}/>
              <div className="relative bg-gray-200 w-3/4 h-3/4 p-6 text-black rounded-xl shadow-xl z-[101] overflow-auto">
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="flex items-center gap-2 text-blue-700">
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <HeartIcon
                    onClick={() => toggleFavorite(selectedProduct)}
                    className={`w-8 h-8 cursor-pointer ${
                      userFavorites.some((f) => f.slug === selectedProduct.slug)
                        ? "text-red-500 fill-red-500"
                        : "text-gray-400"
                    }`}/>
                </div>
                <h2 className="text-xl font-bold mb-4">
                  {selectedProduct.title}
                </h2>
                <video
                ref={videoRef}
                src={selectedProduct.video}
                controls
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-[400px] rounded-lg mb-4"/>
                {getChapters().length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-row gap-9">
                      {getChapters().map((chapter, index) => (
                        <span
                        key={index}
                        onClick={() => playChapter(chapter)}
                        className={`cursor-pointer underline ${
                          activeChapter?.label === chapter.label
                          ? "text-blue-800 font-semibold"
                          : "text-blue-600"}`}>
                            {chapter.label}
                            </span>))}
                            <span
                            onClick={() => {
                              if (!videoRef.current) return;
                              setActiveChapter(null);
                              videoRef.current.currentTime = 0;
                              videoRef.current.play();
                             }}
                             className="cursor-pointer underline text-gray-900">Reset</span></div>
                             </div>
                            )}
                <p className="text-gray-600">
                  {selectedProduct.description}
                </p>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
