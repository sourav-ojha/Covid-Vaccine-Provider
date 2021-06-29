import axios from "axios";

var option1 = {
  method: "GET",
  params: { country: "India" },
  headers: {
    "x-rapidapi-key": "030897a63fmsh3598269663a1a95p1e2ee6jsn58480512ad55",
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

var option2 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "030897a63fmsh3598269663a1a95p1e2ee6jsn58480512ad55",
    "x-rapidapi-host": "covid-19-india-data-by-zt.p.rapidapi.com",
  },
};

const url1 = "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total";
const url2 =
  "https://covid-19-india-data-by-zt.p.rapidapi.com/GetIndiaTotalCounts";

const request1 = axios.get(url1, option1);
const request2 = axios.get(url2, option2);

export const covidData = async (cb) => {
  await axios
    .all([request1, request2])
    .then(
      axios.spread((...responses) => {
        const response1 = responses[0];
        const response2 = responses[1];
        return cb(responses);
      })
    )
    .catch((error) => console.log(error));
};
