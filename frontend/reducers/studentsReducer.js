import {
  STUDENT_BY_ACTIVITY_FAIL,
  STUDENT_BY_ACTIVITY_REQUEST,
  STUDENT_BY_ACTIVITY_SUCCESS,
  STUDENT_LIST_FAIL,
  STUDENT_LIST_REQUEST,
  STUDENT_LIST_SUCCESS,
} from '../constants/studentConstants';

export const studentListReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_LIST_REQUEST:
      return { loading: true, students: [] };
    case STUDENT_LIST_SUCCESS:
      return { loading: false, students: action.payload };
    case STUDENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const studentByActivityReducer = (state = { students: [] }, action) => {
  switch (action.type) {
    case STUDENT_BY_ACTIVITY_REQUEST:
      return { loading: true, students: [] };
    case STUDENT_BY_ACTIVITY_SUCCESS:
      return { loading: false, students: action.payload };
    case STUDENT_BY_ACTIVITY_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
