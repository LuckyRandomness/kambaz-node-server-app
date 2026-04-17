import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
    const dao = EnrollmentsDao();
    const onEnrollUserInCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        if(!currentUser) { 
            res.sendStatus(401);
            return;
        }
        const { courseId } = req.params;
        const newEnrollment = dao.enrollUserInCourse(currentUser._id, courseId);
        res.send(newEnrollment);
    }
    const onUnenrollUserInCourse = async (req, res) => {
        const { courseId } = req.params;
        let { user } = req.body || {};
        if (!user) {
            const currentUser = req.session["currentUser"];
            if (!currentUser) {
                return res.status(401).json({ error: "Unauthorized" });
            }
            user = currentUser._id;
        }
        
        try{
            const result = await dao.unenrollUserInCourse(user, courseId);
            res.json(result);   
        } catch(error) {
            res.status(401).json({ error: "CANNOT"});
        }
    };
    const findMyEnrollments = async (req, res) => {
        let { userId } = req.params;
        if (userId === "current") {
            const currentUser = req.session["currentUser"];
            if (!currentUser) {
                res.sendStatus(401);
                return;
            }
            userId = currentUser._id;
        }
        const enrollments = await dao.findMyEnrollments(userId);
        res.send(enrollments);
    }
    app.post("/api/courses/:courseId/enrollment", onEnrollUserInCourse);
    app.delete("/api/courses/:courseId/enrollment", onUnenrollUserInCourse);
    app.get("/api/users/:userId/enrollments", findMyEnrollments);
}