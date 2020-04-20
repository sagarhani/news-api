const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const newsRoutes = require("./routes/news");
app.use(bodyParser.json());

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.use("/api", newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running"));
