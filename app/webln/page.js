"use client";

import { requestProvider } from "webln";
import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Link,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";
import { useRouter } from "next/navigation";
// import Link from "next/link";
import alby from "../assets/images/alby.png";
import createAlby from "../assets/images/createAlby.png";
import { fetchInvoice } from "../components/Payments/fetchInvoice";

export default function Webln() {
  const [nodeInfo, setNodeInfo] = useState(null);
  const [balance, setBalance] = useState(0);
  const [alert, setAlert] = useState(false);
  const [webln, setWebln] = useState(null);
  const router = useRouter();

  const albyLink = <Link href="https://getalby.com/">Alby</Link>;
  const weblnLink = <Link href="https://www.webln.dev/">WebLN</Link>;

  const handleOpen = () => {
    setAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert(false);
  };

  async function loadRequestProvider() {
    const webln = await requestProvider();
    const nodeInfo = await webln.getInfo();
    const balance = await webln.getBalance();

    setNodeInfo(nodeInfo);
    setBalance(balance.balance);
    setWebln(webln);
  }

  async function receivePayment() {
    const payInvoice = async (invoice) => {
      const apiKey = "143ada40429f4b42aec4780672f31f6a";
      var invoice = invoice.paymentRequest.toString();
      const body = `{"out": true, "bolt11": ${invoice}}`;

      const res = await fetch(
        "https://aloofmeerkat2.lnbits.com/api/v1/payments",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "X-Api-Key": apiKey,
          },
          body: body,
        }
      );
      //const data = await res.json();
      console.log(res);
      if (res.ok === false) {
        handleOpen();
      }
    };
    try {
      const invoice = await webln.makeInvoice(5);
      console.log(invoice);
      await payInvoice(invoice);
    } catch (error) {
      console.log(error);
      handleOpen();
    }
  }

  async function makePayment() {
    try {
      const invoice = await fetchInvoice();
      await webln.sendPayment(invoice.payment_request);
    } catch (error) {
      console.log(error);
      handleOpen();
    }
  }

  return (
    <Box sx={{ maxWidth: "md" }}>
      <Typography variant="h4">Webbplånbok</Typography>
      <Typography>
        Med en webbplånbok kan du enkelt betala med bitcoin på hemsidor med
        hjälp av lightning. Här visar vi hur du kommer igång med att använda en
        webbplånbok. Häng med!
      </Typography>

      <Typography variant="h5" sx={{ mt: 3 }}>
        Steg 1: Installera en webbplånboks-extension
      </Typography>
      <Typography sx={{ mb: 2 }}>
        En webbplånbok är en extension i din webbläsare som installeras på samma
        sätt som vanliga extensioner. Jag använder Chrome och då installeras
        extensioner via chrome web store. Min favorit webbplånbok idag är{" "}
        {albyLink} och det är den som jag kommer använda som exempel i denna
        genomgång. Sök på getAlby i chrome web store och installera extensionen.
      </Typography>
      <img src={alby.src} alt="Install Alby" style={{ maxWidth: 750 }} />
      <Typography variant="h5" sx={{ mt: 3 }}>
        Steg 2: Skapa en ny plånbok
      </Typography>
      <Typography sx={{ mb: 2 }}>
        När Alby är installerat dyker en Alby-ikon upp i högra hörnet på din
        webbläsare. Tryck på den för att öppna menyn och tryck sedan på "Add a
        new account". I det nya fönstret får du möjlighet att välja mellan att
        skapa ett Alby account eller ansluta med en egen plånbok eller nod. Välj
        att ansluta med ett Alby account och gå genom de olika stegen.
      </Typography>
      <img
        src={createAlby.src}
        alt="Create Alby account"
        style={{ maxWidth: 750 }}
      />
      <Typography variant="h5" sx={{ mt: 3 }}>
        Steg 3: Anslut Alby med BitcoinAkademin
      </Typography>
      <Typography>
        Webbplånböcker kan anslutas med hemsidor genom ett protokoll som heter{" "}
        {weblnLink}. När en plånbok är ansluten till en hemsida kan betalningar
        enkelt göras mellan hemsidan och användaren. Testa att ansluta din nya
        webbplånbok med oss genom att trycka på knappen nedan:
      </Typography>
      <Button
        onClick={loadRequestProvider}
        variant="contained"
        sx={{
          color: "white",
          fontWeight: "bold",
          mt: 2,
          textTransform: "none",
        }}
      >
        Koppla webbplånbok
      </Button>
      {nodeInfo !== null ? (
        <Box>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Wooohoo du klarade det!
          </Typography>
          <Typography>
            Din webblånbok är nu kopplad till Lightning Playground
          </Typography>
          <Typography>Ditt saldo: {balance} sats</Typography>
        </Box>
      ) : (
        <></>
      )}
      <Typography variant="h5" sx={{ mt: 3 }}>
        Steg 4: Ta emot en betalning
      </Typography>
      <Typography>
        För att ta emot en betalning krävs att du som användare skapar en
        betalningsförfrågan (på engelska invoice eller payment request) till
        betalaren. Tryck på knappen nedan för att skapa en betalningsförfrågan
        på 50 sats till Lightning Playground. En ruta från Alby kommer dyka upp
        där du får möjligheten att lägga till ett meddelande och bekräfta.
        Första 50 satsen bjuder vi på.
      </Typography>
      <Button
        variant="contained"
        sx={{
          color: "white",
          fontWeight: "bold",
          mt: 2,
          textTransform: "none",
        }}
        onClick={receivePayment}
        disabled={webln !== null ? false : true}
      >
        Få 50 sats
      </Button>
      <Typography variant="h5" sx={{ mt: 3 }}>
        Steg 5: Skicka en betalning
      </Typography>
      <Typography>
        För att skicka en betalning behöver du ta emot en betalningsförfrågan.
        En hemsida som du har kopplat din webbplånbok till kan enkelt skicka en
        betalningsförfrågan till dig, vilket automatiskt fångas upp av Alby som
        öppnar ett nytt fönster där du antingen kan acceptera eller neka
        betalningen. Tryck på knappen nedan för att testa!
      </Typography>
      <Button
        variant="contained"
        sx={{
          color: "white",
          fontWeight: "bold",
          mt: 2,
          textTransform: "none",
        }}
        onClick={makePayment}
        disabled={webln !== null ? false : true}
      >
        Betala 25 sats
      </Button>
      <Stack
        width="100%"
        display="flex"
        direction="row"
        justifyContent="space-between"
        sx={{ mt: 5 }}
      >
        <Button
          variant="outlined"
          sx={{
            fontWeight: "bold",
            mt: 2,
            textTransform: "none",
          }}
          onClick={() => router.push("/")}
        >
          Tillbaka
        </Button>
        <Button
          variant="contained"
          sx={{
            color: "white",
            fontWeight: "bold",
            mt: 2,
            textTransform: "none",
          }}
          onClick={() => router.push("/webln/use")}
        >
          Gå vidare
        </Button>
      </Stack>
      <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Något gick fel med betalningen. Försök igen senare.
        </Alert>
      </Snackbar>
    </Box>
  );
}
