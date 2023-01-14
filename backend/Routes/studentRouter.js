import express from "express";
import * as studentController from "../Controllers/studentController.js";

const studentRouter = express.Router();

//get all students
studentRouter.get("/", studentController.getAllStudents);

//get student by id
studentRouter.get("/:studentId", studentController.getStudentById);

//login student
studentRouter.post("/login-student", studentController.loginStudent);

//sign up student
studentRouter.post("/signup-student", studentController.insertStudent);

export { studentRouter }