"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface Product {
  title: string;
  slug: string;
  img: string;
  video?: string;
  description?: string;
}

interface AppContextType {
  favorites: Product[];
  history: Product[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (slug: string) => void;
  addToHistory: (product: Product) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [history, setHistory] = useState<Product[]>([]);

  // Load user data when app starts
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (!user) return;

    const favKey = `favorites_${user}`;
    const historyKey = `history_${user}`;

    setFavorites(JSON.parse(localStorage.getItem(favKey) || "[]"));
    setHistory(JSON.parse(localStorage.getItem(historyKey) || "[]"));
  }, []);

  // 🟢 ADD FAVORITE
  const addToFavorites = (product: Product) => {
    const user = localStorage.getItem("currentUser");
    if (!user) return;

    const favKey = `favorites_${user}`;

    const filtered = favorites.filter(
      (item) => item.slug !== product.slug
    );

    const updated = [...filtered, product];

    setFavorites(updated);
    localStorage.setItem(favKey, JSON.stringify(updated));
  };

  // 🟢 REMOVE FAVORITE
  const removeFromFavorites = (slug: string) => {
    const user = localStorage.getItem("currentUser");
    if (!user) return;

    const favKey = `favorites_${user}`;

    const updated = favorites.filter(
      (item) => item.slug !== slug
    );

    setFavorites(updated);
    localStorage.setItem(favKey, JSON.stringify(updated));
  };
  const addToHistory = (product: Product) => {
    const user = localStorage.getItem("currentUser");
    if (!user) return;
    const historyKey = `history_${user}`;
    const filtered = history.filter(
      (item) => item.slug !== product.slug
    );
    const updated = [product, ...filtered];
    setHistory(updated);
    localStorage.setItem(historyKey, JSON.stringify(updated));
  };
  return (
    <AppContext.Provider
      value={{
        favorites,
        history,
        addToFavorites,
        removeFromFavorites,
        addToHistory,
      }}>
      {children}
    </AppContext.Provider>
  );
}
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("AppContext missing");
  return context;
};
