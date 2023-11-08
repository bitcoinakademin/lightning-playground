export const fetchInvoice = async () => {
    const apiKey = "9af358a4eec34c9aafbe77d8b33d564d";
    const body = `{"out": false, "amount": 25, "memo": "Lightning är coolt", "unit": "sat", "webhook": "", "internal": false}`;

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
    const data = await res.json();
    return data;
  };