"use client";

import { createContext, useContext, useEffect, useState } from "react";
export interface Product {
  title: string;
  slug: string;
  img: string;
}

interface AppContextType {
  favorites: Product[];
  history: Product[];
  addToFavorites: (product: Product) => void;
  addToHistory: (product: Product) => void;
}
const AppContext = createContext<AppContextType | undefined>(undefined);
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [history, setHistory] = useState<Product[]>([]);

  useEffect(() => {
    const fav = localStorage.getItem("favorites");
    const hist = localStorage.getItem("history");

    if (fav) setFavorites(JSON.parse(fav));
    if (hist) setHistory(JSON.parse(hist));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const addToFavorites = (product: Product) => {
    if (!favorites.find((item) => item.slug === product.slug)) {
      setFavorites([...favorites, product]);
    }
  };

  const addToHistory = (product: Product) => {
    if (!history.find((item) => item.slug === product.slug)) {
      setHistory([product, ...history]);
    }
  };

  return (
    <AppContext.Provider
      value={{ favorites, history, addToFavorites, addToHistory }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
