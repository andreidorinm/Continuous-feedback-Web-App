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

//get all professors
const getAllStudents = async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.status(200).json({ data: students });
  } catch (error) {
    next(error);
  }
};

const loginStudent = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const student = await Student.findOne({ where: { email: email } });
      if (student) {
        if (student.password === password) {
          res.status(200).json({ data: student });
        } else {
          res.status(401).json({ message: 'Invalid password.' });
        }
      } else {
        res.status(404).json({ message: 'Student not found.' });
      }
    } catch (error) {
      next(error);
    }
  };

export {
    getStudentById,
    getStudentsByActivity,
    getAllStudents,
    loginStudent
}