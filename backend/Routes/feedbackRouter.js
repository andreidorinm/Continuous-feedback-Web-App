import express from 'express';
import * as feedbackController from '../Controllers/feedbackController.js';

const feedbackRouter = express.Router();

//insert new feedback
feedbackRouter.post('/:feedbackId', feedbackController.insertFeedback);

export { feedbackRouter };
