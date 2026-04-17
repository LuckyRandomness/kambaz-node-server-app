import mongoose from "mongoose";
import moduleSchema from "../modules/schema.js";
import assignmentsSchema from "../assignments/schema.js";
import quizzesSchema from "../quizzes/schema.js";
const courseSchema = new mongoose.Schema({
   _id: String,
   name: String,
   number: String,
   credits: Number,
   description: String,
   modules: [moduleSchema],
   assignments: [assignmentsSchema],
   quizzes: [quizzesSchema]
 },
 { collection: "courses" }
);
export default courseSchema;