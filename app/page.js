"use client"

import { requestProvider } from "webln";
import { useState } from "react";


export default function Home() {
  const [nodeInfo, setNodeInfo] = useState("");
  const [webln, setWebln] = useState("");

  async function loadRequestProvider() {
    const webln = await requestProvider();
    const nodeInfo = await webln.getInfo();
    setNodeInfo(nodeInfo.node.alias);
    setWebln(webln);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-mono text-2xl">Lightning Network Playground</h1>
      <button className="m-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={loadRequestProvider}>Connect to provider</button>
      <p>Connected to: {nodeInfo}</p>
    </main>
  );
}
