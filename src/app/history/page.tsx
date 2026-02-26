"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const router = useRouter();
  const [history, setHistory] = useState<any[]>([]);
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) {
      router.push("/");
      return;
    }
    const historyKey = `history_${user}`;
    const storedHistory = JSON.parse(
      localStorage.getItem(historyKey) || "[]"
    );
    setHistory(storedHistory);
  }, []);
  return (
    <div className="min-h-screen bg-gray-200 p-10">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">
        Watch History
      </h1>
      {history.length === 0 ? (
        <div className="bg-white p-10 text-gray-800 rounded-xl shadow text-center">
          No recently viewed products.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {history.map((item, index) => (
            <div
              key={`${item.slug}-${index}`}
              onClick={() => router.push(`/products/${item.slug}`)}
              className="bg-gray-50 border-b-5 border-blue-300 rounded-xl shadow hover:shadow-lg transition cursor-pointer w-80 h-60">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-xl"/>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
