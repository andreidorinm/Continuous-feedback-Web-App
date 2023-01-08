import express from 'express';
import * as feedbackController from '../Controllers/feedbackController.js';

const feedbackRouter = express.Router();

//insert new feedback
feedbackRouter.post('/feedback', feedbackController.insertFeedback);

export { feedbackRouter };
