"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import Link from "next/link";

export default function ProfilePage() {
  const { user, firebaseSignOut } = useUserAuth();

  if (!user) {
    return (
      <main className="p-5 text-center">
        <p className="mb-5">You must be logged in to view this page.</p>
        <Link href="/week-9" className="text-blue-500 underline">
          Go to Login
        </Link>
      </main>
    );
  }

  return (
    <main className="p-5 text-center space-y-5">
      <h1 className="text-3xl font-bold">Profile</h1>

      <p><strong>Name:</strong> {user.displayName}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <div className="flex justify-center gap-5 mt-3">
        <Link href="/week-9" className="bg-green-500 hover:bg-green-300 text-white px-5 py-3 rounded">
          Home Page
        </Link>
        <button onClick={() => firebaseSignOut()} className="bg-green-500 text-white px-5 py-3 rounded hover:bg-green-300 transition">
          Log Out
        </button>
      </div>
    </main>
  );
}
