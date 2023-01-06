import express from "express";
import * as feedbackController from "../Controllers/feedbackController.js"

const feedbackRouter = express.Router()

//insert new feedback
feedbackRouter.post("/", feedbackController.insertFeedback)

export { feedbackRouter }