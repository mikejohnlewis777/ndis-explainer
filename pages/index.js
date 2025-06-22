
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">NDIS Explainer Tool</h1>
        <p className="text-lg text-gray-600">
          A free tool to help NDIS workers find the right line item for the services they provide.
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:justify-center">
          <Link href="/finder">
            <a className="px-6 py-3 bg-black text-white rounded text-lg">Find a Line Item</a>
          </Link>
          <Link href="/glossary">
            <a className="px-6 py-3 border border-black text-black rounded text-lg">NDIS Glossary</a>
          </Link>
        </div>

        <div className="mt-10 text-left border p-6 rounded">
          <h2 className="text-2xl font-semibold">How It Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-2">
            <li>Answer a few questions about the service you're providing</li>
            <li>Get the closest-matching NDIS line item with tips and conditions</li>
            <li>Learn about terms, pricing rules, and documentation</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
