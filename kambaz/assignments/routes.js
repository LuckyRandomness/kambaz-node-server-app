import AssignmentsDao from "../assignments/dao.js";
export default function AssignmentsRoutes(app, db) {
  const dao = AssignmentsDao(db);
  const findAssignmentsForCourse = (req, res) => {
    const { courseId } = req.params;
    const assignments = dao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  }
  const createAssignmentForCourse = async (req, res) => {
    const newAssignment = dao.createAssignment(req.body);
    res.json(newAssignment);
  }
  const deleteAssignment = (req, res) => {
    const { assignmentId } = req.params;
    const status = dao.deleteAssignment(assignmentId);
    res.send(status);
  }
  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(status);
  }
  app.put("/api/courses/:courseId/assignments/:assignmentId", updateAssignment);
  app.delete("/api/courses/:courseId/assignments/:assignmentId", deleteAssignment);
  app.post("/api/courses/assignments", createAssignmentForCourse);
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
};