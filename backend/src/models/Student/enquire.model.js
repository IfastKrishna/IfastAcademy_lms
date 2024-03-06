import mongoose, { Schema } from "mongoose";

const followupSchema = new Schema({
  followupDate: {
    type: Date,
    required: true,
  },
  followupMode: {
    type: String,
  },
  followupDetails: {
    type: String,
    required: true,
  },
});

const enquireSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: String,
    lastName: String,
    gender: {
      type: String,
      required: true,
    },
    collegeOrSchool: String,
    qualification: String,
    aadharNumber: String,
    birthDate: {
      type: Date,
      required: true,
    },
    primaryPhone: {
      type: String,
      required: true,
    },
    secondaryPhone: String,
    primaryEmail: {
      type: String,
      required: true,
    },
    secondaryEmail: String,
    currentAddress: {
      type: String,
    },
    permanentAddress: String,
    permanentPincode: Number,
    currentPincode: Number,
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    packages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
      },
    ],
    interestLevel: {
      type: String,
      enum: ["HOT", "WARM", "COLD"],
    },
    requiredDemoLecture: {
      type: String,
      enum: ["YES", "NO"],
    },
    followups: [followupSchema],
    leadSource: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LeadSource",
    },
    refName: String,
    enquireDate: {
      type: Date,
      required: true,
    },
    assignTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    notes: String,
  },
  { timestamps: true }
);
