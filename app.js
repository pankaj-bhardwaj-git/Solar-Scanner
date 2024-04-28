const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.post("/api/solardata/add", async (req, res) => {
  try {
    console.log(req.body);
    res.send("Data Added!");
  } catch (e) {
    console.log(e);
  }
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
