import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    type: String,
    points: Number,
    question: String,
    choices: [{_id: String, text: String, correct: Boolean}]
 }
);
export default schema;