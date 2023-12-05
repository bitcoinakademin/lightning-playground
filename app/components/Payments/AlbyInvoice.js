import React from "react";
import { BitcoinIcon } from "@bitcoin-design/bitcoin-icons-react/outline";
import { Button } from "@mui/material";

export default async function AlbyInvoice() {
  const res = await fetch("https://api.getalby.com/invoices", {
    headers: {
      Authorization: "Bearer ODRMZDUZZJGTMZKXYY0ZNTRHLWJHY2ITMJM4ZMIXYWMYNZFI",
    },
  });
  const data = await res.json();

  console.log(data);
  //   async function makePayment() {
  //     try {
  //       const invoice = await fetchInvoice();
  //       await webln.sendPayment(invoice.payment_request);
  //     } catch (error) {
  //       console.log(error);
  //       handleOpen();
  //     }
  //   }

  return (
    <Button
      variant="contained"
      sx={{
        color: "white",
        fontWeight: "bold",
        mt: 2,
        textTransform: "none",
      }}
      //onClick={makePayment}
      //disabled={webln !== null ? false : true}
    >
      Betala 5 sats
    </Button>
  );
}
