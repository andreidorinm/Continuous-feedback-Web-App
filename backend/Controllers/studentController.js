import { Student } from "../Models/student.js";

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
    getStudentById
}