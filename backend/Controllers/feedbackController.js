import { Feedback } from "../Models/feedback.js";

//get all feedback by activity id
const getFeedbackByActivity = async (req, res, next) => {
    try {
        const activityId = req.params.activityId;
        const feedback = await Feedback.findAll({
            where: { activityId },
            order: [['timeStamp', 'DESC']]
        });
        if (feedback.length === 0)
            res.status(404).json({ message: 'No feedback found.' })
        else
            res.status(200).json({ data: feedback });
    } catch (error) {
        next(error);
    }
};

//get all feedback
const getAllFeedback = async (req, res, next) => {
    try {
        const feedback = await Feedback.findAll();
        if (feedback.length === 0)
            res.status(404).json({ message: 'No feedback found.' })
        else
            res.status(200).json({ data: feedback });
    } catch (error) {
        next(error);
    }
};



//insert new feedback
const insertFeedback = async (req, res, next) => {
    try {
        const feedback = await Feedback.create({
            activityId: req.body.activityId,
            emoticon: req.body.emoticon
        });
        res.status(201).json({ data: feedback });
    } catch (error) {
        next(error);
    }
};

export {
    getFeedbackByActivity,
    insertFeedback,
    getAllFeedback
}