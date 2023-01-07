export const professorListReducer = (state = { professors: [] }, action) => {
  switch (action.type) {
    case PROFESSOR_LIST_REQUEST:
      return { loading: true, professors: [] };
    case PROFESSOR_LIST_SUCCESS:
      return { loading: false, professors: action.payload };
    case PROFESSOR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
