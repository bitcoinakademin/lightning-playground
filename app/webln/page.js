"use client";

import { requestProvider } from "webln";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Webln() {
  const [nodeInfo, setNodeInfo] = useState(null);
  const [balance, setBalance] = useState(0);
  const [webln, setWebln] = useState(null);
  const router = useRouter();

  async function loadRequestProvider() {
    const webln = await requestProvider();
    const nodeInfo = await webln.getInfo();
    const balance = await webln.getBalance();

    setNodeInfo(nodeInfo);
    setBalance(balance.balance);
    setWebln(webln);
  }

  async function makeInvocie() {
    //TODO Automatically pay invoice
    const invoice = await webln.makeInvoice(100);
    console.log(invoice);
  }

  async function makePayment() {
      //TODO create invoice from backend
    const invoice = await webln.makeInvoice(5);
    console.log(invoice);
    await webln.sendPayment(invoice.paymentRequest);
  }

  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-6">
      <h1 className="font-mono text-2xl">Webbplånbok</h1>
      <p className="max-w-prose">
        Med en webbplånbok kan du enkelt betala med bitcoin på hemsidor via
        Lightning Network. Här visar vi hur du kommer igång med att använda en
        webbplånbok, steg för steg. Häng med!
      </p>

      <h2 className="font-mono text-xl pt-24 font-bold">
        Steg 1: Installera en webbplånboks-extension
      </h2>
      <p className="max-w-prose">
        En webbplånbok installeras som en extension i din webbläsare, och den
        installeras på samma sätt som vanliga extensioner. Jag använder Chrome
        och då installeras extensioner via chrome web store. Min favorit
        webbplånbok idag är Alby (getalby.com) och det är den som jag kommer
        använda som exempel i denna genomgång. Sök på getAbly och installera
        extensionen.
      </p>
      <h2 className="font-mono text-xl pt-24 font-bold">
        Steg 2: Skapa en ny plånbok
      </h2>
      <p className="max-w-prose">
        När Alby är installerat så dyker en Alby-ikon upp i högra hörnet på din
        webbläsare. Tryck på den för att öppna menyn och tryck sedan på "Add a
        new account". I det nya fönstret får du möjlighet att välja mellan att
        skapa ett Alby account eller ansluta med en egen plånbok eller nod. Välj
        att ansluta med ett Alby account och gå genom de olika stegen. Grattis
        du har nu skapat en webbläsarplånbok!
      </p>
      <h2 className="font-mono text-xl pt-24 font-bold">
        Steg 3: Anslut Alby med BitcoinAkademin
      </h2>
      <p className="max-w-prose">
        Nu kan du ansluta din nya webbläsarplånbok med oss genom att trycka på
        knappen nedan:
      </p>
      <button
        className="m-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={loadRequestProvider}
      >
        Koppla webbplånbok
      </button>
      {nodeInfo !== null ? (
        <>
          <p className="font-mono text-lg pt-4 font-bold">
            Wooohoo du klarade det!
          </p>
          <p>BitcoinAkademin är nu kopplad till: {nodeInfo.node.alias}</p>
          <p>kontotillgångar: {balance} sats</p>
        </>
      ) : (
        <></>
      )}
      <h2 className="font-mono text-xl pt-24 font-bold">
        Steg 4: Ta emot en betalning
      </h2>
      <p className="max-w-prose">
        För att ta emot en betalning krävs att du som användare skapar en
        betalningsbegäran (på engelska invoice eller payment request) till
        betalaren. Tryck på knappen nedan för att skapa en betalningsbegäran på
        100 sats. En ruta från Alby kommer dyka upp där du får möjligheten att
        lägga till ett meddelande och bekräfta. Första 100 satsen bjuder vi på.
      </p>
      <button
        className="m-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={makeInvocie}
      >
        Få 100 sats
      </button>
      <h2 className="font-mono text-xl pt-24 font-bold">
        Steg 5: Skicka en betalning
      </h2>
      <p className="max-w-prose">
        För att skicka en betalning behöver du ta emot en betalningsbegäran. Då
        dyker ett fönster upp från Alby där du får acceptera eller neka
        betalningen. Tryck på knappen nedan för att testa!
      </p>
      <button
        className="m-5 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        onClick={makePayment}
      >
        Betala 50 sats
      </button>
    </main>
  );
}

export default Webln;
