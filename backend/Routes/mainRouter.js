import express from 'express';
import { sequelize } from '../sequelize.js';
import { professorRouter } from './professorRouter.js';
import { studentRouter } from './studentRouter.js';

import { Student } from '../models/student.js';
import { Professor } from '../models/professor.js';

const router = express.Router();

// router.use("/students", studentRouter);
// router.use("/professors",professorRouter);

router.put('/createDatabase', async (request, response, next) => {
  try {
    await sequelize.sync({ force: true });
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// import data from JSON object
router.post('/data', async (request, response, next) => {
  try {
    const registry = {}; //temporary variable in order to resolve the enrollments
    //to do
    response.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

//export data from database
router.get('/data', async (request, response, next) => {
  try {
    const result = [];
    //to do
    if (result.length > 0) {
      response.json(result);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

export { router as mainRouter };
