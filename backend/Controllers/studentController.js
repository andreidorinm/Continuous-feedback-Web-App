import { Student } from "../Models/student.js";
import { Participation } from "../Models/participation.js";
import bcrypt from "bcrypt"

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

//get all students
const getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.findAll();
        res.status(200).json({ data: students });
    } catch (error) {
        next(error);
    }
};

//student sign-up
const insertStudent = async (req, res, next) => {
    try {
        const password = req.body.password
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const student = await Student.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.status(201).json({ data: student });
    } catch (error) {
        next(error)
    }
}

//student login
const loginStudent = async (req, res, next) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const student = await Student.findOne({
            where: {
                email: email
            }
        })
        if (student) {
            const passwordMatch = await bcrypt.compare(password, student.password)
            if (passwordMatch)
                res.status(200).json({ data: student })
            else
                res.status(400).json({ message: 'Password is incorrect.' })
        }
        else
            res.status(400).json({ message: 'Email is incorrect.' })
    } catch (error) {
        next(error)
    }
}

export {
    getStudentById,
    getStudentsByActivity,
    getAllStudents,
    insertStudent,
    loginStudent
}