let state = {
  street: "2300 Kennedy Street",
  zipcode: "55413",
};

const mapToSearch = (state = [], action) => {
  switch (action.type) {
    case "SET_MAP_TO_SEARCH":
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default mapToSearch;
