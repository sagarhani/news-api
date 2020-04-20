const express = require("express");
const router = express.Router();
const { getHeadlines, searchNews } = require("../services/newsService");
const { registerUser } = require("../services/userService");

router.get("/headlines", async (req, res) => {
  try {
    const data = await getHeadlines(req, res);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/search", async (req, res) => {
  const seatchTerm = req.query.search || "";
  try {
    const data = await searchNews(seatchTerm);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/user", async (req, res) => {
  try {
    const data = await registerUser(req.body);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
