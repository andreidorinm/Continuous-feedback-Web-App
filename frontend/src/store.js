import { configureStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  activityCreateReducer,
  activityListReducer,
  activityDeleteReducer,
  activityUpdateReducer,
} from '../reducers/activityReducers';
import { feedbackListReducer } from '../reducers/feedbackReducers';
import { participationCreateReducer } from '../reducers/participationReducers';
import { professorListReducer } from '../reducers/professorReducers';
import {
  studentListReducer,
  studentByActivityReducer,
} from '../reducers/studentsReducer';

const reducer = combineReducers({
  activityList: activityListReducer,
  activityDelete: activityDeleteReducer,
  activityCreate: activityCreateReducer,
  activityUpdate: activityUpdateReducer,
  feedbackList: feedbackListReducer,
  participationCreate: participationCreateReducer,
  professorList: professorListReducer,
  studentList: studentListReducer,
  studentByActivity: studentByActivityReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
