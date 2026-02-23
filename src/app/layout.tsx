
import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

export const metadata: Metadata = {
  title: "TechNet Automotive Dashboard",
  description: "Automotive Management System with Favorites and Watch History",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
