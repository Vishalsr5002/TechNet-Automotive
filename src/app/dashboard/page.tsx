"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Heart } from "lucide-react";
import { useAppContext } from "@/app/context/AppContext";

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
      "Vacuum booster helps amplify brake pedal force for easier braking.",
  },
  "disc-brake": {
    title: "Disc Brake",
    slug: "disc-brake",
    img: "https://thumbs.dreamstime.com/b/brake-disc-caliper-white-vector-illustration-50447807.jpg",
    video: "/discbrake.mp4",
    description:
      "Disc brake uses friction to slow down the vehicle by pressing brake pads against a rotating disc.",
  },
  "steering-gear": {
    title: "Steering Gear",
    slug: "steering-gear",
    img: "https://res.cloudinary.com/yourmechanic/image/upload/dpr_auto,f_auto,q_auto/v1/article_images/1_How_to_Replace_a_Steering_Rack_Gearbox_a_steering_rack",
    video: "/fluid.mp4",
    description:
      "Steering gear converts steering wheel movement into wheel turning motion.",
  },
};
export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const {favorites,addToFavorites, removeFromFavorites, addToHistory,} = useAppContext();
  const product = productData[slug];
  const isFavorite = favorites.some((item) => item.slug === slug);
  useEffect(() => {
    if (!product) return; {
      addToHistory(product);
    }
  }, [slug]);
  const toggleFavorite = () => {
    if (!product) return;
    if (isFavorite) {
      removeFromFavorites(slug);
    } else {
      addToFavorites(product);
    }
  };
  if (!product) return <div className="p-10">Product Not Found</div>;
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900">
          {product.title}
        </h1>
        <Heart
          onClick={toggleFavorite}
          className={`w-10 h-10 cursor-pointer transition ${
            isFavorite
              ? "text-red-500 fill-red-500"
              : "text-gray-400 hover:text-red-400"
          }`}
        />
      </div>
      <div className="aspect-video mb-8">
        <video
          src={product.video}
          controls
          className="w-full h-full rounded-xl shadow"
        />
      </div>

      <p className="text-gray-200 text-lg leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}
