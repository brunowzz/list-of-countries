"use client";

import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="bg-gray-100  flex flex-col items-center pt-10">
      <h1 className="text-6xl font-bold mb-4">Error 404</h1>
      <p className="text-xl mb-8">Page not found.</p>
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Back Home
      </Link>
    </section>
  );
}
