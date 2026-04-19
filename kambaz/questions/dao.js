import { v4 as uuidv4 } from "uuid";
import model from "../courses/model.js";
export default function QuestionsDao() {
 async function findQuestionsForQuiz(cid, qid) {
   const course = await model.findById(cid);
   const ourQuiz = course.quizzes.find((q) => q._id == qid);
   return ourQuiz.questions;
 };

 return {
   findQuestionsForQuiz
 };
}
