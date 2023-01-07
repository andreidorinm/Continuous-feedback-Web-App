import {
  FEEDBACK_LIST_REQUEST,
  FEEDBACK_LIST_SUCCESS,
  FEEDBACK_LIST_FAIL,
  FEEDBACK_CREATE_REQUEST,
  FEEDBACK_CREATE_SUCCESS,
  FEEDBACK_CREATE_FAIL,
  FEEDBACK_CREATE_RESET,
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

export const feedbackCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK_CREATE_REQUEST:
      return { loading: true };
    case FEEDBACK_CREATE_SUCCESS:
      return { loading: false, success: true, feedback: action.payload };
    case FEEDBACK_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FEEDBACK_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
