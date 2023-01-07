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

const reducer = combineReducers({
  activityList: activityListReducer,
  activityDelete: activityDeleteReducer,
  activityCreate: activityCreateReducer,
  activityUpdate: activityUpdateReducer,
  feedbackList: feedbackListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = configureStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
