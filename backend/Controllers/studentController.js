import { Student } from "../Models/student.js";
import { Participation } from "../Models/participation.js";

//get all students by activity id
const getStudentsByActivity = async (req, res, next) => {
    try {
        const activityId = req.params.activityId;
        const students = await Student.findAll({
            include: [{
                model: Participation,
                as: 'participations',
                where: { activityId }
            }]
        });
        if (students.length === 0)
            res.status(404).json({ message: 'No students found.' })
        else
            res.status(200).json({ data: students });
    } catch (error) {
        next(error);
    }
};

//get student by id
const getStudentById = async (req, res, next) => {
    try {
        const studentId = req.params.studentId;
        const student = await Student.findByPk(studentId);
        if (student)
            res.status(200).json({ data: student });
        else
            res.status(404).json({ message: 'Student not found.' })
    } catch (error) {
        next(error);
    }
};

export {
    getStudentById,
    getStudentsByActivity
}