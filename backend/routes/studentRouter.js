import express from 'express';
import * as studentController from '../controllers/studentController.js';

const studentRouter = express.Router();

//get student by id
studentRouter.get('/:studentId', studentController.getStudentById);

export { studentRouter };
