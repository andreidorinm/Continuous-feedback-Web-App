import express from 'express';
import * as activityController from '../Controllers/activityController.js';
import * as feedbackController from '../Controllers/feedbackController.js';
import * as studentController from '../Controllers/studentController.js';

const activityRouter = express.Router();

activityRouter.get('/search', activityController.searchActivities);

//get activity by id
activityRouter.get('/:activityId', activityController.getActivityById);

//get all activities
activityRouter.get('/', activityController.getAllActivities);

//insert new activity
activityRouter.post('/', activityController.insertActivity);

//update an activity
activityRouter.put('/:activityId', activityController.updateActivity);

//delete an activity
activityRouter.delete('/:activityId', activityController.deleteActivity);

//get all students by activity id
activityRouter.get(
  '/:activityId/students',
  studentController.getStudentsByActivity
);

//get all feedback by activity id
activityRouter.get(
  '/:activityId/feedback',
  feedbackController.getFeedbackByActivity
);

export { activityRouter };
