import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* searchTheBarrels(action) {
  console.log(action.payload);
  let searchStarter = "*all"
  if(action.payload.length < 1){
    console.log("gottem");
  }
  try {
    const response = yield axios.get(`/api/barrel-search/${action.payload}`);
    yield put({ type: "SET_SEARCH_TERM_BARRELS", payload: response.data });
    console.log(response.data[0]);

    // yield put({ type: "SET_MAP_TO_SEARCH", payload: firstMap });
  } catch (error) {
    console.log(error);
  }
}

function* mapQuery(action) {
  console.log(action.payload);

  try {
    const response = yield axios.get(`/api/barrel-search/${action.payload}`);
    yield put({ type: "SET_SEARCH_TERM_BARRELS", payload: response.data });
    console.log(response.data[0]);
    let hosts = response.data[0].hosts;
    let street = response.data[0].street;
    let zipcode = response.data[0].zipcode;
    let firstMap = {
      hosts: hosts,
      street: street,
      zipcode: zipcode,
    };
    yield put({ type: "SET_MAP_TO_SEARCH", payload: firstMap });
  } catch (error) {
    console.log(error);
  }
}

function* searchBarrelSaga() {
  yield takeEvery("SEARCH_ALL_BARRELS", searchTheBarrels);
  yield takeEvery("NEW_MAP_QUERY", mapQuery);
}

export default searchBarrelSaga;
