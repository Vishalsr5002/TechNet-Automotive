"use client";
export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">
          Your E-mail: vishalsr.tcp@gmail.com
        </h1>
        <h2 className="text-2xl font semi-bold text-blue-600 mb-4">
            Your Password: Admin
        </h2>
        <p className="text-gray-600">
          User profile details will appear here.
        </p>
      </div>
    </div>
  );
}
