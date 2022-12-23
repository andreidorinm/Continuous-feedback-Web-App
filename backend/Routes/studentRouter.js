import express from "express";
import {Student} from "../Models/student.js";

const studentRouter = express.Router();

//get all students
studentRouter.get("/allStudents", async (request, response, next) => {
    try {
      const students = await Student.findAll();
      if (students.length > 0) {
        response.json(students);
      } else {
        response.sendStatus(204);
      }
    } catch (error) {
      next(error);
    }
  });

//get student by id
studentRouter.get(
    "/:studentId",
    async (request, response, next) => {
      try {
        const student = await Student.findByPk(request.params.studentId);
          if (student) {
            response.json(student);
          } else {
            response.sendStatus(404);
          }
      } catch (error) {
        next(error);
      }
    }
  );

  