"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      router.push("/");
      return;
    }

    setCurrentUser(user);

    const favKey = `favorites_${user}`;
    const storedFavs = JSON.parse(
      localStorage.getItem(favKey) || "[]"
    );
    setFavorites(storedFavs);
  }, []);

  const removeFromFavorites = (slug: string) => {
    if (!currentUser) return;
    const favKey = `favorites_${currentUser}`;
    const updatedFavs = favorites.filter(
      (item) => item.slug !== slug
    );
    setFavorites(updatedFavs);
    localStorage.setItem(favKey, JSON.stringify(updatedFavs));
  };
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        My Favorites
      </h1>
      {favorites.length === 0 ? (
        <div className="bg-white p-10 text-gray-800 text-2xl rounded-xl shadow text-center">
          <strong>No favorite products yet.</strong>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-xl border-b-5 border-blue-300 shadow hover:shadow-lg transition w-80 h-60"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-xl cursor-pointer"
                onClick={() =>
                  router.push(`/products/${item.slug}`)
                }
              />

              <div className="p-4 flex justify-between items-center">
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>

                <button
                  onClick={() =>
                    removeFromFavorites(item.slug)
                  }
                  className="text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
