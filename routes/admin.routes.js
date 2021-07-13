import express from "express";
import { adminAuthorize } from "../middleware/Authorization.js";
import User, {
  fetchAllUser,
  fetchRequestedUser,
  fetchVaccinatedUser,
  fetchVaccination,
} from "../models/user.js";

const router = express.Router();
//   /admin/dashboard
router.get("/", adminAuthorize, (req, res) => {
  res.render("admin/admin.pug");
});

router.get("/registered", adminAuthorize, (req, res) => {
  fetchAllUser().then((data) => {
    res.render("admin/regUser.pug", { data });
  });
});

router.get("/vaccinated", adminAuthorize, (req, res) => {
  fetchVaccinatedUser().then((data) => {
    res.render("admin/vaccUser.pug", { data });
  });
});

router.get("/requested", adminAuthorize, (req, res) => {
  fetchRequestedUser().then((data) => {
    res.render("admin/vaccReq.pug", { data });
  });
});

router.post("/requested", adminAuthorize, async (req, res) => {
  const { aadhar, appointment_date } = req.body;
  const updated = await User.findOneAndUpdate(
    { aadhar },
    { appointment_date, vaccine_req: false, appointment_status: true },
    { new: true }
  );
  console.log(updated);
  res.redirect("/admin/requested");
});

router.get("/requested/decline", adminAuthorize, async (req, res) => {
  const { aadhar } = req.query;
  const data = await User.findOneAndUpdate(
    { aadhar },
    { vaccine_req: false, appointment_status: false },
    { new: true }
  );
  console.log(data.vaccine_req);
  res.redirect("/admin/requested");
});

router.get("/vaccination", adminAuthorize, (req, res) => {
  fetchVaccination().then((data) => {
    res.render("admin/vaccination.pug", { data });
  });
});

router.post("/vaccination", adminAuthorize, async (req, res) => {
  const { aadhar, date } = req.body;
  await User.findOneAndUpdate(
    { aadhar },
    { appointment_status: false, vaccine_status: true, vaccinated_date: date }
  );
  console.log(aadhar);
  res.redirect("/admin/vaccination");
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  console.log("log out");
  res.redirect("/");
});
export default router;
