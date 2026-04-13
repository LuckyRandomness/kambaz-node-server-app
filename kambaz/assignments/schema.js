import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    from: String,
    due: String,
    until: String,
    points: String,
    description: String
}
);
export default schema;