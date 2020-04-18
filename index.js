const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const newsRoutes = require("./routes/news");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.use("/api", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running"));
