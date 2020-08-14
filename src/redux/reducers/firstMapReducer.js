const firstMapReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FIRST_MAP":
      return action.payload;
    default:
      return state;
  }
};

export default firstMapReducer;
