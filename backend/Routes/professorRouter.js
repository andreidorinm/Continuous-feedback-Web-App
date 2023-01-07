import express from 'express';
import * as professorController from '../controllers/professorController.js';
import * as activityController from '../controllers/activityController.js';

const professorRouter = express.Router();

//get professor by id
professorRouter.get('/:professorId', professorController.getProfessorById);

//get activities by professor id
professorRouter.get(
  '/:professorId/activities',
  activityController.getActivitiesByProfessor
);

export { professorRouter };
