import express from "express";
const router = express.Router();

router.get("/", function (req, res) {
  res.render("index", {
    IS_LOCAL: req.app.get("env") === "development",
    MAIN_MFE: process.env.MAIN_MFE,
    IMPORT_MAP_URL: process.env.IMPORT_MAP_URL,
  });
});

export default router;
