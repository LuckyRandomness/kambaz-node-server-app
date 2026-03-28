import { v4 as uuidv4 } from "uuid";
export default function EnrollmentsDao(db) {
  function enrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    const enrollment = { _id: uuidv4(), user: userId, course: courseId }
    enrollments.push(enrollment);
    return enrollment; 
  }
  function unenrollUserInCourse(userId, courseId) {
    const { enrollments } = db;
    db.enrollments = enrollments.filter((enrollment) => 
      (enrollment.course !== courseId && enrollment.user !== userId));
  }
  return { enrollUserInCourse, unenrollUserInCourse };
}