import express from "express";
import * as professorController from "../Controllers/professorController.js"
import * as activityController from "../Controllers/activityController.js"

const professorRouter = express.Router();

//get all professors
professorRouter.get('/', professorController.getAllProfessors);

//login professor
professorRouter.post("/login-professor", professorController.loginProfessor);

//sign up professor
professorRouter.post("/signup-professor", professorController.insertProfessor);

//get professor by id
professorRouter.get("/:professorId", professorController.getProfessorById);

//get activities by professor id
professorRouter.get("/:professorId/activities", activityController.getActivitiesByProfessor)

export { professorRouter }