import { takeEvery, put, call } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsFailure } from "./cartSlice";

function* fetchProductsSaga() {
  try {
    const data = yield call("https://fakestoreapi.com/products");
    const formattedData = yield data.json();
    yield put(fetchProductsSuccess(formattedData));
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

function* watchFetchProducts() {
    yield takeEvery('products/fetchProducts', fetchProductsSaga);
  }
  
  export default function* rootSaga() {
    yield watchFetchProducts();
  }