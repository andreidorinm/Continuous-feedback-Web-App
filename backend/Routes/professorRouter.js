import express from "express";
import * as professorController from "../Controllers/professorController.js"
import * as activityController from "../Controllers/activityController.js"

const professorRouter = express.Router();

//get professor by id
professorRouter.get("/:professorId", professorController.getProfessorById);

//get activities by professor id
professorRouter.get("/:professorId/activities", activityController.getActivitiesByProfessor)

export { professorRouter }