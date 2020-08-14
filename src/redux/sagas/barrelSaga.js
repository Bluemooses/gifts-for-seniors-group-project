import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

/**
 * GET BARRELS
 */
function* getBarrels(action) {
  try {
    const response = yield axios.get(`/api/barrel-select`);
    yield put({ type: "SET_BARRELS", payload: response.data });
  } catch (error) {
    console.log("CLIENT GET BARREL-LOCATION ERR", error);
  }
}

/**
 * GET ADMIN BARRELS
 */
function* getAdminBarrels(action) {
  try {
    const response = yield axios.get(`/api/barrel-select/admin`);
    yield put({ type: "SET_ADMIN_BARRELS", payload: response.data });
  } catch (error) {
    console.log("CLIENT GET BARREL-LOCATION ERR", error);
  }
}

/**
 * ADD A NEW BARREL
 */
function* newBarrel(action) {
  console.log(action.payload);
  let dataObject = action.payload;
  try {
    yield axios.post("/api/barrel-create", dataObject);
    console.log("from newBarrel", action.payload);
    yield put({ type: "SEARCH_ALL_BARRELS", payload: "*all" });
    // yield put({ type: 'FETCH_LIST' })
  } catch (error) {
    console.log(error);
  }
}

/**
 * DELETE A BARREL
 */
function* deleteBarrel(action) {
  console.log(action.payload);
  console.log(action.payload.id);
  try {
    yield axios.delete(`/api/barrel-edit/delete/${action.payload.id}`);
    yield put({
      type: "SEARCH_ALL_BARRELS",
      payload: action.payload.previousSearch,
    });
  } catch (error) {
    console.log(error);
  }
}

/**
 * EDIT A BARREL
 */
function* updateBarrel(action) {
  console.log(action.payload);
  try {
    let searchTerm = action.payload.searchTerm;
    yield axios.put(
      `api/barrel-edit/${action.payload.itemToEdit}`,
      action.payload
    );
    yield put({
      type: "SEARCH_ALL_BARRELS",
      payload: searchTerm,
    });
  } catch (error) {
    console.log("error");
  }
}

/**
 * UPDATE IF BARREL IS ACTIVE OR NOT
 */
function* updateStatus(action) {
  let data = {
    id: action.payload.id,
    status: action.payload.status,
  };
  console.log(data);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.put(`/api/barrel-update/update/${data}`, data);
    if (action.payload.previousSearch === Array(0)) {
      console.log("pooter");
    }
    yield put({
      type: "SEARCH_ALL_BARRELS",
      payload: action.payload.previousSearch,
    });
  } catch (error) {
    console.log("UPDATE STATUS FAILED", error);
  }
}

/**
 * UPDATE IF LOCATION IS PUBLIC OR PRIVATE
 */
function* updatePublic(action) {
  let data = {
    id: action.payload.id,
    public: action.payload.public,
  };
  console.log(data);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.put(`/api/barrel-update/barrel-status/${data}`, data);

    yield put({
      type: "SEARCH_ALL_BARRELS",
      payload: action.payload.previousSearch,
    });
  } catch (error) {
    console.log("UPDATE public FAILED", error);
  }
}

/**
 * BARREL ROOT SAGA(S)
 */
function* newBarrelSaga() {
  yield takeEvery("ADD_TO_LIST", newBarrel);
  yield takeEvery("GET_BARRELS", getBarrels);
  yield takeEvery("GET_ADMIN_BARRELS", getAdminBarrels);
  yield takeEvery("DELETE_BARREL", deleteBarrel);
  yield takeEvery("UPDATE_BARREL", updateBarrel);
  yield takeEvery("UPDATE_STATUS", updateStatus);
  yield takeEvery("UPDATE_PUBLIC", updatePublic);
}

export default newBarrelSaga;
