const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Prom = require("prom-client");
const { collectDefaultMetrics } = require("prom-client");

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(bodyParser.json());
app.use(cors());

app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", Prom.register.contentType);
    const metrics = await Prom.register.metrics();
    res.end(metrics);
  } catch (error) {
    console.error("Error generating metrics: ", error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/metrics", (req, res) => {
  const metricData = req.body;
  console.log("received performance metrics: ", metricData);
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
