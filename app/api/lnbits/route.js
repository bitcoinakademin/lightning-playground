import { NextResponse } from "next/server";

export async function GET(res) {
  const apiKey = "143ada40429f4b42aec4780672f31f6a";
  const body = `{"out": false, "amount": 5, "memo": "Lightning rocks", "unit": "sat", "webhook": "", "internal": false}`;

  const response = await fetch("https://aloofmeerkat2.lnbits.com/api/v1/payments", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Api-Key": apiKey,
    },
    body: body,
  });

  
  const data = await response.json();
  console.log(data);
  return new NextResponse(response)

}
