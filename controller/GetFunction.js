import { covidData_api } from "../api.js";

// Get Covid data from API
export const covidData_get = (req, res) => {
  covidData_api((data) => {
    let covid_report = data[0].data.data[0];
    res.render("index.pug", { CR: covid_report });
  });
};
