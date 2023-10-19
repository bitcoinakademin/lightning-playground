"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-mono text-2xl">Lightning Network Playground</h1>

      <button
        className="m-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push("/webln")}
      >
        Gå till webbplånbok
      </button>
    </main>
  );
}
