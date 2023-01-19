import { Activity } from '../Models/activity.js';
import { Professor } from '../Models/professor.js';
import { Sequelize } from 'sequelize';

//get activities by professor id
const getActivitiesByProfessor = async (req, res, next) => {
  try {
    const professorId = req.params.professorId;
    const activities = await Activity.findAll({
      where: { professorId },
      include: [
        {
          model: Professor,
          as: 'professor',
        },
      ],
    });
    if (activities.length === 0)
      res.status(404).json({ message: 'No activities found.' });
    else res.status(200).json({ data: activities });
  } catch (error) {
    next(error);
  }
};

//get activity by id
const getActivityById = async (req, res, next) => {
  try {
    const activityId = req.params.activityId;
    const activity = await Activity.findByPk(activityId, {
      include: [
        {
          model: Professor,
          as: 'professor',
        },
      ],
    });
    if (activity) res.status(200).json({ data: activity });
    else res.status(404).json({ message: 'Activity not found.' });
  } catch (error) {
    next(error);
  }
};

//get all activities
const getAllActivities = async (req, res, next) => {
  try {
    const activities = await Activity.findAll({
      include: [
        {
          model: Professor,
          as: 'professor',
        },
      ],
    });
    if (activities.length === 0)
      res.status(404).json({ message: 'No activities found.' });
    else res.status(200).json({ data: activities });
  } catch (error) {
    next(error);
  }
};

//insert new activity
const insertActivity = async (req, res, next) => {
  try {
    const activity = await Activity.create({
      professorId: req.body.professorId,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      duration: req.body.duration,
    });
    res.status(201).json({ data: activity });
  } catch (error) {
    next(error);
  }
};

// search currently active activities by search term
const searchActivities = async (req, res, next) => {
  try {
    const searchTerm = req.query.q;
    const activities = await Activity.findAll({
      where: {
        title: {
          [Sequelize.Op.like]: `%${searchTerm}%`,
        },
      },
      include: [
        {
          model: Professor,
          as: 'professor',
        },
      ],
    });
    const currentDate = new Date()
    const filteredActivities = activities.filter(activity => {
      const end = new Date(activity.date.getTime() + activity.duration * 60000)
      return activity.date <= currentDate && end >= currentDate
    })
    if (filteredActivities.length > 0) {
      res.status(200).json({ data: filteredActivities });
    } else {
      res.status(404).json({ message: 'No activity found.' });
    }
  } catch (error) {
    next(error);
  }
};

//update an activity
const updateActivity = async (req, res, next) => {
  try {
    const activityId = req.params.activityId;
    const affectedRows = await Activity.update(
      {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        duration: req.body.duration,
      },
      {
        where: { id: activityId },
      }
    );
    if (affectedRows > 0) {
      res.status(200).json({ message: 'Activity updated successfully.' });
    } else {
      res.status(404).json({ message: 'Activity not found.' });
    }
  } catch (error) {
    next(error);
  }
};

//delete an activity
const deleteActivity = async (req, res, next) => {
  try {
    const activityId = req.params.activityId;
    const affectedRows = await Activity.destroy({
      where: { id: activityId },
    });
    if (affectedRows > 0) {
      res.status(200).json({ message: 'Activity deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Activity not found.' });
    }
  } catch (error) {
    next(error);
  }
};

export {
  getActivitiesByProfessor,
  getActivityById,
  updateActivity,
  insertActivity,
  deleteActivity,
  getAllActivities,
  searchActivities,
};
