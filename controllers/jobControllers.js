// const jobModel = require("../models/jobModel");
import jobModel from "../models/jobModel.js";

const createJob = async (req, res) => {
  //   console.log(req.body);
  //todo: insert data into db for new job db.jobs.insertOne({})
  try {
    const newJob = new jobModel(req.body);
    console.log("🚀 ~ crateJob ~ newJob:", newJob);
    const newlyInsertedJob = await newJob.save();
    console.log("🚀 ~ crateJob ~ newlyInsertedJob:", newlyInsertedJob);

    res.json({
      sucess: true,
      message: "Job Created Sucessfully " + newlyInsertedJob._id,
    });
  } catch (error) {
    res.status(400).json({
      sucess: false,
      message: "something went wrong",
    });
  }
};

const getJob = async (req, res) => {
  const jobList = await jobModel.find({});
  console.log("🚀 ~ getJob ~ jobList:", jobList);
  res.json({
    sucess: true,
    message: "Dummy job get API",
    result: jobList,
  });
};

const editJob = async (req, res) => {
  console.log(req.body);
  // const updatedJobRecord = await jobModel.updateMany(
  //   { title: req.body.title },
  //   { $set: req.body }
  // );
  // const updatedJobRecord = await jobModel.updateOne(
  //   { _id: req.body._id },
  //   { $set: req.body }
  // );
  const updatedJobRecord = await jobModel.findByIdAndUpdate(
    req.body._id,
    req.body
  );
  console.log("🚀 ~ editJob ~ updatedJobRecord:", updatedJobRecord);
  res.json({
    sucess: true,
    message: "Job edited successfully",
  });
};

const deleteJob = async (req, res) => {
  try {
    await jobModel.findByIdAndDelete(req.body._id);
    res.json({
      success: true,
      message: "Job deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      sucsess: false,
      message: "something went wrong, please try again after some time",
    });
  }
};

// module.exports = {
//   crateJob,
//   getJob,
// };

export { createJob, getJob, editJob, deleteJob };
