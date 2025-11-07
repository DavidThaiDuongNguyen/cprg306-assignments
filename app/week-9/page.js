"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, googleSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const handleGitHubLogin = async () => {
    try {
      await gitHubSignIn();
      router.push("/week-9/shopping-list");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      router.push("/week-9/shopping-list");
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="p-5 text-center">
      <h1 className="text-3xl font-bold mb-6">Week 9 - Login</h1>

      {!user && (
        <div className="space-y-5">
          <button onClick={handleGitHubLogin} className="bg-black hover:bg-gray-700 text-white px-5 py-3 rounded">
            Sign in with GitHub
          </button>

          <button onClick={handleGoogleLogin} className="bg-red-500 hover:bg-red-300 text-white px-5 py-3 rounded block mx-auto">
            Sign in with Google
          </button>
        </div>
      )}

      {user && (
        <div className="space-y-3">
          <p>
            Welcome, <strong>{user.providerData[0].displayName}</strong> ({user.email})
          </p>

          <br />
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/week-9/shopping-list" className="w-50 bg-blue-500 hover:bg-blue-300 text-white px-5 py-3 rounded text-center">
              Shopping List
            </Link>

            <Link href="/week-9/profile" className="w-50 bg-green-500 hover:bg-green-300 text-white px-5 py-3 rounded text-center">
              Profile
            </Link>
          </div>

          <button onClick={handleLogout} className="bg-black hover:bg-gray-700 text-white px-5 py-3 rounded">
            Log Out
          </button>
        </div>
      )}
    </main>
  );
}
