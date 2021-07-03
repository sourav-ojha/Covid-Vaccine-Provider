import { covidData_api, fetchPincode_api } from "../api.js";

export const fetchPincode_post = async (req, res) => {
  let { pincode, date } = req.body;
  try {
    let result = date.toString().split("-");
    date = result[2] + "-" + result[1] + "-" + result[0];
    console.log(date, req.body);
    const data = fetchPincode_api(pincode, date, (data) => {
      console.log(data.centers);
      if (data.centers.length !== 0) {
        res.render("DisplayPincode.pug", {
          centers: data.centers,
          message: "",
        });
      } else {
        res.render("DisplayPincode.pug", {
          message: "vaccine not available",
          centers: [],
        });
      }
    });
  } catch (error) {
    res.render("DisplayPincode.pug", { message: "vaccine not available" });
  }
};

export const covidData_post = (req, res) => {
  covidData_api((data) => {
    let covid_report = data[0].data.data[0];
    res.render("index.pug", { CR: covid_report });
  });
};
