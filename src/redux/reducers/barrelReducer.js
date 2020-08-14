const newBarrelReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_BARRELS":
      return action.payload;

    default:
      return state;
  }
};

export default newBarrelReducer;
