import EnrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app, db) {
    const dao = EnrollmentsDao(db);
    const onEnrollUserInCourse = (req, res) => {
        const currentUser = req.session["currentUser"];
        if(!currentUser) { 
            console.log("NO USER ERROR");
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
    app.post("/api/courses/:courseId/enrollment", onEnrollUserInCourse);
    app.delete("/api/courses/:courseId/enrollment", onUnenrollUserInCourse);
}