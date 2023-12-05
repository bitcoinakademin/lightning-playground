"use client";

import { requestProvider } from "webln";
import { useState } from "react";
import {
  Typography,
  Box,
  Button,
  Link,
  Alert,
  Snackbar,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { fetchInvoice } from "../components/Payments/fetchInvoice";

function StepTwo({ children }) {
  const [nodeInfo, setNodeInfo] = useState(null);
  const [balance, setBalance] = useState(0);
  const [alert, setAlert] = useState(false);
  const [webln, setWebln] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
    <Stack spacing={5}>
      <Box>
        <Typography variant="h6">Koppla plånbok</Typography>
        <Typography>
          Webbplånböcker kan kopplas till hemsidor genom ett protokoll som heter{" "}
          {weblnLink}. När en plånbok är kopplad till en hemsida kan betalningar
          enkelt göras mellan hemsidan och användaren. Testa att koppla din nya
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
              Din webblånbok är nu kopplad till BitcoinAkademin
            </Typography>
            <Typography>Ditt saldo: {balance} sats</Typography>
          </Box>
        ) : (
          <></>
        )}
      </Box>
      <Box>
        <Typography variant="h6">Ta emot en betalning</Typography>
        <Typography>
          För att ta emot en betalning krävs att du som användare skapar en
          betalningsförfrågan (på engelska invoice eller payment request) till
          betalaren. Tryck på knappen nedan för att skapa en betalningsförfrågan
          på 50 sats till Lightning Playground. En ruta från Alby kommer dyka
          upp där du får möjligheten att lägga till ett meddelande och bekräfta.
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
          Få 5 sats
        </Button>
      </Box>
      <Box>
        <Typography variant="h6">Skicka en betalning</Typography>
        <Typography>
          För att skicka en betalning behöver du ta emot en betalningsförfrågan.
          En hemsida som du har kopplat din webbplånbok till kan enkelt skicka
          en betalningsförfrågan till dig, vilket automatiskt fångas upp av Alby
          som öppnar ett nytt fönster där du antingen kan acceptera eller neka
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
          Betala 5 sats
        </Button>
      </Box>
      <Box>
        <Typography variant="h6">Bra jobbat!</Typography>
        <Typography>
          Nu har du koll på de grundläggande funktionerna. I nästa steg visar vi
          hur du använder webbplånboken i verkligheten.
        </Typography>
      </Box>
      <Snackbar open={alert} autoHideDuration={10000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ maxWidth: "80vw" }}
        >
          Något gick fel med betalningen. Försök igen senare. Hör av er till oss
          om felet består.
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default StepTwo;
