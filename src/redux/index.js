
import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "../slicer"

export default configureStore({
reducer: {
    sliceReducer,
    },
});