import express from "express";
import * as professorController from "../Controllers/professorController.js"
import * as activityController from "../Controllers/activityController.js"

const professorRouter = express.Router();

professorRouter.get('/', professorController.getAllProfessors);

professorRouter.post("/login-professor", professorController.loginProfessor);

//get professor by id
professorRouter.get("/:professorId", professorController.getProfessorById);

//login professor


//get all professors

//get activities by professor id
professorRouter.get("/:professorId/activities", activityController.getActivitiesByProfessor)

export { professorRouter }