// const express = require("express");
import express from "express";
// const mongoose = require("mongoose");
import mongoose from "mongoose";
import dotenv from "dotenv";
// const jobRoutes = require("./routes/job");
import jobRoutes from "./routes/job.js";

const app = express();

dotenv.config();

// console.log(process.env.DB_USERNAME);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.nohtjpy.mongodb.net/`
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Databse connextion failed", err);
  });

app.use(express.json()); //sequence matter

app.use("/api/v1/job", jobRoutes);

app.listen(process.env.PORT || 10000, () =>
  console.log("server is running at port 10000")
);
