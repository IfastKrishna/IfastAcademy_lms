const feedbackSchema = new mongoose.Schema({
  message: {
    type: String,
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

export { Feedback };
