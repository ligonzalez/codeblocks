"use client";
import { login } from "@/app/api";
import { useSearchParams } from "next/navigation";

export default function LoginPage() { 
  const searchParams = useSearchParams();
  const myParam = searchParams.get('error'); 
  
  return (
    <main className="min-h-screen bg-gray-50 p-8 justify-center">
      <div className="max-w-2xl mx-auto justify-center">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Login</h1>
        </header>
      </div>

      <form action={login}>
        <div className="place-items-center h-screen">
          <div className="mb-6 w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="bg-gray-50 w-20px border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-6 w-1/2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="bg-gray-50 w-20px border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6 w-1/2">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login
            </button>
          </div>
          <div className="text-red-500">
             <p>{myParam? `Error ${myParam}`:""}</p>
          </div>
        </div>
      </form>
    </main>
  );
}