const adminBarrels = (state = [], action) => {
  switch (action.type) {
    case "SET_ADMIN_BARRELS":
      return action.payload;
    default:
      return state;
  }
};

export default adminBarrels;
