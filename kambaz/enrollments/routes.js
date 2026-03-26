import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app, db) {
    const dao = EnrollmentsDao(db);
    const onEnrollUserInCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseId } = req.params;
        const newEnrollment = dao.enrollUserInCourse(currentUser._id, courseId);
        res.send(newEnrollment);
    }
    const onUnenrollUserInCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        const { courseId } = req.params;
        const status = dao.unenrollUserInCourse(currentUser._id, courseId);
        res.send(status);
    }
    app.post("/api/courses/:courseId/enrollment", onEnrollUserInCourse);
    app.delete("/api/courses/:courseId/enrollment", onUnenrollUserInCourse);
}