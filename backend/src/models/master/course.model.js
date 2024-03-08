import mongoose from "mongoose";

const { Schema } = mongoose;

const moduleSchema = new Schema({
  lectures: [{ type: Schema.Types.ObjectId, ref: "Lecture" }],
  assignments: [{ type: Schema.Types.ObjectId, ref: "Assignment" }],
  tests: [{ type: Schema.Types.ObjectId, ref: "Test" }],
});

const progressSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: "User" },
  lastAccessedDate: { type: Date, default: Date.now },
  currentModuleIndex: { type: Number, default: 0 },
});

const courseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    avatar: { type: String, required: true },
    category: { type: String, required: true },
    duration: { type: Number, required: true, min: 1 },
    instructor: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    studentsEnrolled: { type: Number, default: 0 },
    modules: [moduleSchema],
    studentsProgress: [progressSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
