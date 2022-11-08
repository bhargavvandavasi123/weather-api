require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const citiesRouter = require("./routes/cities");
app.use("/cities", citiesRouter);

app.listen(process.env.PORT || 3000, () => console.log("server started"));
