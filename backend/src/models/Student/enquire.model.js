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
      value: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
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
    currentAddress: String,
    permanentAddress: String,
    permanentPincode: Number,
    currentPincode: Number,
    courses: [
      {
        value: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Course",
        },
        label: {
          type: String,
          required: true,
        },
      },
    ],
    packages: [
      {
        value: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Package",
        },
        label: {
          type: String,
          required: true,
        },
      },
    ],
    interestLevel: [
      {
        label: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    requiredDemoLecture: [
      {
        label: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    followups: [followupSchema],
    leadSource: [
      {
        value: {
          type: String,
          required: true,
        },
        label: {
          type: String,
          required: true,
        },
      },
    ],
    refName: String,
    enquireDate: {
      type: Date,
      required: true,
    },
    assignTo: {
      value: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee",
      },
      label: {
        type: String,
        required: true,
      },
    },

    notes: String,
  },
  { timestamps: true }
);
