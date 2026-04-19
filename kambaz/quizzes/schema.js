import mongoose from "mongoose";
import questionsSchema from "../questions/schema.js";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    from: String,
    due: String,
    until: String,
    points: Number,
    description: String,
    questionNum: Number,
    published: Boolean,
    type: String,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: Boolean,
    timeLimitAmt: Number,
    questions: [questionsSchema]
 }
);
export default schema;