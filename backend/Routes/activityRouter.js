import express from 'express';
import { Activity } from '../models/activityModel.js';

const activityRouter = express.Router();

//get all activities
activityRouter.get('/allActivities', async (request, response, next) => {
  try {
    const activities = await Activity.findAll();
    if (activities.length > 0) {
      response.json(activities);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

//add new activity
activityRouter.post('/addNewActivity', async (request, response, next) => {
  try {
    const activity = await Activity.create(request.body);
    response.status(201).location(activity.id).send();
  } catch (error) {
    next(error);
  }
});

//get activity's id
activityRouter.get('/:activityId', async (request, response, next) => {
  try {
    const activity = await Activity.findByPk(request.params.activityId);
    if (activity) {
      response.json(activity);
    } else {
      response.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

//get feedback by activity
activityRouter.get('/:activityId/feedback', async (request, response, next) => {
  try {
    const activity = await Activity.findByPk(request.params.activityId);
    if (activity) {
      const feedback = await activity.getFeedback();
      if (feedback.length > 0) {
        response.json(feedback);
      } else {
        response.sendStatus(204);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

//DE VERIFICAT
//delete the activity
activityRouter.delete('/:activityId', async (request, response, next) => {
  try {
    const activity = await Activity.findByPk(request.params.activityId);
    if (activity) {
      await activity.destroy();
      response.sendStatus(204);
    } else {
      response.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

//get students by activity
activityRouter.get('/:activityId/students', async (request, response, next) => {
  try {
    const activity = await Activity.findByPk(request.params.activityId);
    if (activity) {
      const students = await activity.getStudents();
      if (students.length > 0) {
        response.json(students);
      } else {
        response.sendStatus(204);
      }
    } else {
      response.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
