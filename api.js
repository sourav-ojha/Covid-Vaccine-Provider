import axios from "axios";
import { Apiconfig } from "./config/api.config.js";

var option1 = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "030897a63fmsh3598269663a1a95p1e2ee6jsn58480512ad55",
    "x-rapidapi-host": "covid-19-india-data-by-zt.p.rapidapi.com",
  },
};

const url1 =
  "https://covid-19-india-data-by-zt.p.rapidapi.com/GetIndiaTotalCounts";

const request1 = axios.get(url1, option1);

export const covidData_api = async (cb) => {
  await axios
    .all([request1])
    .then(
      axios.spread((...responses) => {
        const response1 = responses[0];
        return cb(responses);
      })
    )
    .catch((error) => console.log(error));
};

export const fetchPincode_api = async (pincode, date, cb) => {
  console.log(pincode, date, "in api");
  await axios
    .get(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${date}`,
      Apiconfig
    )
    .then((response) => {
      console.log(response.data);
      return cb(response.data);
    });
};
