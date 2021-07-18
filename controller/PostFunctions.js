import { fetchPincode_api } from "../api.js";
import FeedBack from "../models/feedback.js";

// Slot Availibility By Pincode
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

export const contactUs_post = async (req, res) => {
  const { email, message } = req.body;
  try {
    var data = new FeedBack({ email, message });
    await data.save();
    res.redirect("/contactUs");
  } catch (error) {
    console.log(error)
    res.json({ message: error.message });
  }
};
