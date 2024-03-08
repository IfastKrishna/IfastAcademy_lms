import mongoose, { Schema } from "mongoose";

// Lecture Schema
const lectureSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  videoUrl: { type: String },
  duration: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

// Test Schema
const testSchema = new Schema({
  title: { type: String, required: true },
  questions: [{ type: String, required: true }],
  duration: { type: Number, required: true },
  passingGrade: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Assignment Schema
const assignmentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
  attachments: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

const Lecture = mongoose.model("Lecture", lectureSchema);
const Test = mongoose.model("Test", testSchema);
const Assignment = mongoose.model("Assignment", assignmentSchema);

export { Lecture, Test, Assignment };
