import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    theme: JSON.parse(localStorage.getItem( "theme" )) || {
      name: "light",
      bgPrimary: "#fff",
      bgSecondary: "#f7f7f7",
      boxShadow:
        "rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px",
      base: "#000",
      subbase: "#e5e5e5",
      btnColor: "#ffff"
    }   
      
     
}


const  appearance = createSlice({
    name: "appearance",
    initialState,
    reducers: {
      _setTheme: (state , action) => {
        state.theme = action.payload
        localStorage.setItem("theme", JSON.stringify(action.payload))
      }
 
    }
})

export const {_setTheme} = appearance.actions

export default appearance.reducer