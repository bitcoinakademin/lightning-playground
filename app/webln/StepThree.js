"use client";

import {
  Typography,
  Box,
  Link,
  TextField,
  Stack,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchInvoice } from "@/app/components/Payments/fetchInvoice";
import twitterAlby from "../assets/images/twitterAlby.png";
import sendAlby from "../assets/images/sendAlby.png";

function StepThree() {
  const [paymentRequest, setPaymentRequest] = useState(
    "hämtar betalningsbegäran..."
  );
  const twitterLink = <Link href="https://twitter.com/BAkademin">twitter</Link>;
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchData = async () => {
      const invoice = await fetchInvoice();
      setPaymentRequest(invoice.payment_request);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <Stack spacing={5}>
      <Typography>
        Nu har du kommit igång med Lightning på webben! I förra delen lärde du
        dig hur du kan skicka och ta emot bitcoin på en hemsida som använder
        WebLN. I denna delen ska vi gå genom hur du kan använda din webbplånbok
        utan att en hemsida har integrerat WebLN.
      </Typography>
      <Box>
      <Typography variant="h6">Lightningadress</Typography>
      <Typography sx={{mb: 2}}>
        Alby letar genom hemsidor du besöker efter lightningadresser som början
        med blixtemojin ⚡. Om den hittar en adress blir Alby-ikonen blå. Då är
        det bara att klicka på Alby-ikonen och sedan Send Satoishis, välj hur
        mycket du vill skicka och tryck send. Detta är ett enkelt sätt för en
        användare på t.ex Twitter eller Youtube att möjliggöra för besökare att
        enkelt skicka donationer. Om du vill testa kan du gå in på vår{" "}
        {twitterLink} profil där vi har skrivit in vår lightning adress. Alby
        ikonen kommer bli blå och då kan du trycka på den för att blixtsnabbt
        och billigt skicka en betalning till oss utan inblandning av en bank.
        Ganska coolt!
      </Typography>
      <img
        src={twitterAlby.src}
        alt="Pay on Twitter"
        style={{ maxWidth: isMobile ? "100%" : 750 }}
      />
      </Box>
      <Box>
      <Typography variant="h6">Manuell betalning</Typography>
      <Typography>
        Med Alby kan du självklart också göra en helt vanlig lightning
        betalning. Detta gör du genom att få en betalningsförfrågan i
        textformat, klicka på Alby-ikonen, tryck "Send", klistra in texten,
        tryck "Continue" och slutligen tryck "Pay now". Testa att betala
        betalningsförfrågan på 5 sats till oss nedan:
      </Typography>
      <TextField
        multiline
        value={paymentRequest}
        sx={{ width: "100%", marginY: 4 }}
      />
      <img
        src={sendAlby.src}
        alt="Pay with Alby"
        style={{ maxWidth: isMobile ? "100%" : 750 }}
      />
      </Box>
    </Stack>
  );
}

export default StepThree;
