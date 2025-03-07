const express = require("express");
const cors = require("cors");

const stripe = require("stripe");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("3D printing are we ?");
});

app.use("/api/stripe", login)


const uri = process.env.DB_URI;
const port = process.env.PORT || 6900

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});