import {
  PARTICIPATION_CREATE_REQUEST,
  PARTICIPATION_CREATE_SUCCESS,
  PARTICIPATION_CREATE_FAIL,
  PARTICIPATION_CREATE_RESET,
} from '../constants/participationConstants.js';

export const participationCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PARTICIPATION_CREATE_REQUEST:
      return {
        loading: true,
      };
    case PARTICIPATION_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        participation: action.payload,
      };
    case PARTICIPATION_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case PARTICIPATION_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
