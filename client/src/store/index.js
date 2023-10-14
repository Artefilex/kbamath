import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import  appearance from "./appearance"

const store = configureStore({
    reducer:{
       appearance,
       auth
    }
})

export default store 