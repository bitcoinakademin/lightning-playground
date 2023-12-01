import Axios from "axios";

const getPrice = (url) => {
    // const result = await Axios({
    //     method: "GET",
    //     url: `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`,
    //   })
    //   return result;
  Axios({
    method: "GET",
    url: url,
  })
    .then((res) => {
      return res.data;
    })
};

export default getPrice;
