import express from 'express';
import * as participationController from '../controllers/participationController.js';

const participationRouter = express.Router();

//insert new participation
participationRouter.post('/', participationController.insertParticipation);

export { participationRouter };
