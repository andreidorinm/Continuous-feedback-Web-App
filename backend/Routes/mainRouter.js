import express from 'express';
import * as mainController from '../Controllers/mainController.js';

import { professorRouter } from './professorRouter.js';
import { studentRouter } from './studentRouter.js';
import { activityRouter } from './activityRouter.js';
import { feedbackRouter } from './feedbackRouter.js';
import { participationRouter } from './participationRouter.js';

const router = express.Router();

router.use('/activities', activityRouter);
router.use('/activities/:activityId', feedbackRouter);
router.use('/participation', participationRouter);
router.use('/students', studentRouter);
router.use('/professors', professorRouter);

//recreate database
router.put('/createDatabase', mainController.createDatabase);

//import data from JSON object
router.post('/data', mainController.importData);

//export data from database
router.get('/data', mainController.exportData);

export { router as mainRouter };
