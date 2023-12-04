import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import  appearance from "./appearance"
import adminOperationsReducer from "./admin-operations/AdminOperationsSlice"
const store = configureStore({
    reducer:{
       appearance,
       auth,
       adminOperations: adminOperationsReducer
    }
})

export default store 