import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { sequelize } from './sequelize.js';
import { mainRouter } from './Routes/mainRouter.js';
import * as errorMiddleware from './Middleware/errorMiddleware.js';

import { Activity } from './Models/activity.js';
import { Feedback } from './Models/feedback.js';
import { Participation } from './Models/participation.js';
import { Professor } from './Models/professor.js';
import { Student } from './Models/student.js';

//#region entities' relationships
Activity.hasMany(Participation, {
  foreignKey: 'activityId',
  as: 'participations',
  onDelete: 'CASCADE',
});
Activity.hasMany(Feedback, {
  foreignKey: 'activityId',
  as: 'feedbacks',
  onDelete: 'CASCADE',
});
Activity.belongsTo(Professor, {
  foreignKey: 'professorId',
  as: 'professor',
  onDelete: 'CASCADE',
});

Feedback.belongsTo(Activity, {
  foreignKey: 'activityId',
  as: 'activity',
  onDelete: 'CASCADE',
});

Participation.belongsTo(Student, {
  foreignKey: 'studentId',
  as: 'student',
  onDelete: 'CASCADE',
});
Participation.belongsTo(Activity, {
  foreignKey: 'activityId',
  as: 'activity',
  onDelete: 'CASCADE',
});

Professor.hasMany(Activity, {
  foreignKey: 'professorId',
  as: 'activities',
  onDelete: 'CASCADE',
});

Student.hasMany(Participation, {
  foreignKey: 'studentId',
  as: 'participations',
  onDelete: 'CASCADE',
});
//#endregion

//#region middleware & routes
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/api', mainRouter);

//error middleware
app.use(errorMiddleware.handleJSONParsing);
app.use(errorMiddleware.handleQueries);
app.use(errorMiddleware.handleDatabase);
app.use(errorMiddleware.handleServer);
//#endregion

//run server
const serverPort = 5001;
app.listen(serverPort, async () => {
  console.log(`Express web server running on port ${serverPort}`);
  //database connection
  try {
    await sequelize.authenticate();
    console.log('Connection has been established!');
  } catch (err) {
    console.err('Unable to connect to the database!', err);
  }
});
