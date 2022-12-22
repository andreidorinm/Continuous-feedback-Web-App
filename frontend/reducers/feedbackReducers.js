import {
  FEEDBACK_LIST_REQUEST,
  FEEDBACK_LIST_SUCCESS,
  FEEDBACK_LIST_FAIL,
} from '../constants/feedbackConstants.js';

export const feedbackListReducer = (state = { feedbacks: [] }, action) => {
  switch (action.type) {
    case FEEDBACK_LIST_REQUEST:
      return { loading: true, feedbacks: [] };
    case FEEDBACK_LIST_SUCCESS:
      return { loading: false, feedbacks: action.payload };
    case FEEDBACK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};