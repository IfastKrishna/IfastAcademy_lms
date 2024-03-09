import mongoose, { Schema } from "mongoose";

// Define separate schemas for each key
const followupModeSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
});

const interestLevelSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
});

const leadSourceSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
});

const academicYearSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
});

const documentSchema = new Schema(
  {
    documentName: {
      type: String,
      required: true,
    },
    documentUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const batchSchema = new Schema({
  label: {
    type: String,
    required: true,
  },
  instuctor: {
    type: String,
    required: true,
  },
});

const FollowupMode = mongoose.model("FollowupMode", followupModeSchema);

const InterestLevel = mongoose.model("InterestLevel", interestLevelSchema);

const LeadSource = mongoose.model("LeadSource", leadSourceSchema);

const AcademicYear = mongoose.model("AcademicYear", academicYearSchema);

const Document = mongoose.model("Document", documentSchema);

const Batch = mongoose.model("Batch", batchSchema);

export {
  FollowupMode,
  InterestLevel,
  LeadSource,
  AcademicYear,
  Document,
  Batch,
};
