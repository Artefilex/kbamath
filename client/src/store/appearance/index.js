import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: {
        name: "dark",
        bgPrimary:  "#16181c",
        bgSecondary: "#212327",
        boxShadow: "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
        base: "#e7e9ea",
        subbase: "#71767b",
        btnColor: "#0000"
      },
      
     
}


const  appearance = createSlice({
    name: "appearance",
    initialState,
    reducers: {
      _setTheme: (state , action) => {
        state.theme = action.payload
      }
 
    }
})

export const {_setTheme} = appearance.actions

export default appearance.reducer