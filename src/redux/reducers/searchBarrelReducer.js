const searchBarrels = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM_BARRELS":
      return action.payload;
    default:
      return state;
  }
};

export default searchBarrels;
