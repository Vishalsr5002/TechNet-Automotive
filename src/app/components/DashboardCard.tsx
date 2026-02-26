"use client";

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
}

export default function DashboardCard({
  title,
  icon,
}: DashboardCardProps) {
  return (
    <div
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
    >
      <div className="mb-4 flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl">
        <div className="text-blue-700">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-lg text-gray-800">
        {title}
      </h3>
    </div>
  );
}
