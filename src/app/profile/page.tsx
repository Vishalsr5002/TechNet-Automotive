"use client";
export default function ProfilePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-md text-center">
        <img
        src="https://static.vecteezy.com/system/resources/previews/026/630/551/non_2x/profile-icon-symbol-design-illustration-vector.jpg"
        alt="Profile Picture"
        className="w-32 h-32 rounded-full mx-auto mb-4"/>
        <h1 className="text-2xl font-italic text-blue-800 mb-4">
          Your E-mail: vishalsr.tcp@gmail.com
        </h1>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Your Password: Admin
        </h2>
        <p className="text-gray-600">
          User profile details will appear here.
        </p>
      </div>
    </div>
  );
}
