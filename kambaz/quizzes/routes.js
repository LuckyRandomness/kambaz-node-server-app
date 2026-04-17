import QuizzesDao from "../quizzes/dao.js";
export default function QuizzesRoutes(app) {
  const dao = QuizzesDao();
  const findQuizzesForCourse = async (req, res) => {
    const { courseId } = req.params;
    const quizzes = await dao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  }
  const createQuizForCourse = async (req, res) => {
    const { courseId } = req.params;
    const newQuiz = await dao.createQuiz(courseId, req.body);
    res.send(newQuiz);
  }
  const deleteQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const status = await dao.deleteQuiz(courseId, quizId);
    res.send(status);
  }
  const updateQuiz = async (req, res) => {
    const { courseId, quizId } = req.params;
    const quizUpdates = req.body;
    const status = await dao.updateQuiz(courseId, quizId, quizUpdates);
    res.send(status);
  }
  app.put("/api/courses/:courseId/quizzes/:quizId", updateQuiz);
  app.delete("/api/courses/:courseId/quizzes/:quizId", deleteQuiz);
  app.post("/api/courses/:courseId/quizzes", createQuizForCourse);
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
};