import QuestionsDao from "./dao.js";
export default function QuestionsRoutes(app) {
  const dao = QuestionsDao();
  const findQuestionsForQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const questions = await dao.findQuizzesForCourse(courseId, quizId);
    res.json(questions);
  }
  app.get("/api/courses/:courseId/quizzes/questions", findQuestionsForQuiz);
};