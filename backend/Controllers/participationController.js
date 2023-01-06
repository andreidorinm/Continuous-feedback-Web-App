import { Participation } from "../Models/participation.js";

//insert new participation
const insertParticipation = async (req, res, next) => {
    try {
        const participation = await Participation.create({
            activityId: req.body.activityId,
            studentId: req.body.studentId
        });
        res.status(200).json({ data: participation });
    } catch (error) {
        next(error);
    }
};

export {
    insertParticipation
}