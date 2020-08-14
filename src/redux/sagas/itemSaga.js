import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

//GET WISHLIST
function* fetchList(action) {
  try {
    const response = yield axios.get(`/api/wishlist`);
    yield put({ type: "SET_LIST", payload: response.data });
  } catch (error) {
    console.log("error getting details", error);
  }
}

//POST A NEW ITEM
function* addItem(action) {
  console.log(action.payload);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.post(`/api/wishlist`, action.payload, config);
    yield put({ type: "FETCH_LIST" });
  } catch (error) {
    console.log("POST ERR", error);
  }
}

//DELETE ITEM
function* deleteItem(action) {
  // console.log(action.payload)
  try {
    yield axios.delete(`/api/wishlist/delete/${action.payload}`);
    yield put({ type: "FETCH_LIST" });
  } catch (error) {
    console.log(error);
  }
}
function* editItem(action) {
  console.log("action.payload:", action.payload);

  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.put(`/api/wishlist/edit-item`, action.payload, config);
    yield put({ type: "FETCH_LIST" });
  } catch (error) {
    console.log("ITEM EDIT FAILED", error);
  }
}
//UPDATE THE PRIORITY
function* updatePriority(action) {
  console.log(action.payload);
  let data = {
    id: action.payload.id,
    priority: action.payload.priority,
  };
  console.log(data);
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };
    yield axios.put(`api/wishlist/update/${data}`, data);
    yield put({ type: "FETCH_LIST" });
  } catch (error) {
    console.log("CLIENT UPDATE ERR", error);
  }
}

//SAGA FUNCTIONS
function* ItemSaga() {
  yield takeLatest("FETCH_LIST", fetchList);
  yield takeLatest("ADD_ITEM", addItem);
  yield takeLatest("DELETE_ITEM", deleteItem);
  yield takeLatest("EDIT_ITEM", editItem);
  yield takeLatest("UPDATE_PRIORITY", updatePriority);
}

export default ItemSaga;
