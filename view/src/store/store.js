import { configureStore } from "@reduxjs/toolkit";
import authSReducer from "./features/authSlice";

const stroe = configureStore({ reducer: { auth: authSReducer } });

export default stroe;
