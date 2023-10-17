import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../store/slices/authSlice";
import catalogueReducer from "../store/slices/catalogueSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  catalogue: catalogueReducer,
});

export default rootReducer;
