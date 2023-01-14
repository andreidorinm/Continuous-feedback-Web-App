import { sequelize } from "../sequelize.js"

import { Professor } from "../Models/professor.js";
import { Student } from "../Models/student.js";
import { Activity } from "../Models/activity.js";
import { Feedback } from "../Models/feedback.js";
import { Participation } from "../Models/participation.js";
import bcrypt from "bcrypt"

//recreate database
const createDatabase = async (req, res, next) => {
    try {
        await sequelize.sync({ force: true });
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
}

//import data from JSON object
//insert valid entry
//catch error for each record insert
//push error message along with faulty instance
const importData = async (req, res, next) => {
    try {
        const { professors, students, activities, feedback, participation } = req.body;
        const errors = []
        const saltRounds = 10

        if (professors) {
            for (const professor of professors) {
                let plainPassword
                try {
                    plainPassword = professor.password
                    professor.password = await bcrypt.hash(plainPassword, saltRounds);
                    await Professor.create(professor);
                }
                catch (err) {
                    professor.password = plainPassword
                    errors.push({
                        model: 'professor',
                        instance: professor,
                        error: err.errors[0].message
                    })
                }
            }
        }
        if (students)
            for (const student of students) {
                let plainPassword
                try {
                    plainPassword = student.password
                    student.password = await bcrypt.hash(plainPassword, saltRounds);
                    await Student.create(student);
                }
                catch (err) {
                    student.password = plainPassword
                    errors.push({
                        model: 'student',
                        instance: student,
                        error: err.errors[0].message
                    })
                }
            }
        if (activities)
            for (const activity of activities) {
                try {
                    await Activity.create(activity, {
                        include: [{
                            model: Professor,
                            as: 'professor'
                        }]
                    });
                }
                catch (err) {
                    errors.push({
                        model: 'activity',
                        instance: activity,
                        error: err.errors[0].message
                    })
                }
            }
        if (feedback)
            for (const fb of feedback) {
                try {
                    await Feedback.create(fb, {
                        include: [{
                            model: Activity,
                            as: 'activity'
                        }]
                    });
                }
                catch (err) {
                    errors.push({
                        model: 'feedback',
                        instance: fb,
                        error: err.errors[0].message
                    })
                }
            }
        if (participation)
            for (const part of participation) {
                try {
                    await Participation.create(part, {
                        include: [{
                            model: Student,
                            as: 'student'
                        }, {
                            model: Activity,
                            as: 'activity'
                        }]
                    });
                }
                catch (err) {
                    errors.push({
                        model: 'participation',
                        instance: part,
                        error: err.errors[0].message
                    })
                }
            }
        if (errors.length > 0)
            res.status(400).json({ message: 'Valid data imported', errors: errors })
        else
            res.status(200).json({ message: 'Data imported successfully' });
    } catch (error) {
        next(error);
    }
}

//export data from database
const exportData = async (req, res, next) => {
    try {
        const professors = await Professor.findAll();
        const students = await Student.findAll();
        const activities = await Activity.findAll({
            include: [{
                model: Professor,
                as: 'professor'
            }]
        });
        const feedback = await Feedback.findAll({
            include: [{
                model: Activity,
                as: 'activity'
            }]
        });
        const participation = await Participation.findAll({
            include: [{
                model: Student,
                as: 'student'
            }, {
                model: Activity,
                as: 'activity'
            }]
        });

        const database = {
            professors,
            students,
            activities,
            feedback,
            participation
        };

        res.status(200).json({ data: database });
    } catch (error) {
        next(error);
    }
}

export {
    createDatabase,
    importData,
    exportData
}