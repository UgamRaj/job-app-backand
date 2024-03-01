// const express = require("express");
import express from "express";
import {
  createJob,
  getJob,
  editJob,
  deleteJob,
} from "../controllers/jobControllers.js";
// const jobController = require("../controllers/jobControllers");

const router = express.Router();

router.post("/", createJob);
router.get("/", getJob);

router.patch("", editJob);

router.delete("", deleteJob);

// module.exports = router;

export default router;
