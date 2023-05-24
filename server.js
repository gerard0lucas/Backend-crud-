const express = require("express");
require("dotenv").config();
const connectdb = require("./config/db");
const port = process.env.port;
const cors = require("cors");


connectdb();
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", require("./routes/todorouts"));

// app.use(errorhandler

app.listen(port, () => {
  console.log(`server running in ${port} `);
});
