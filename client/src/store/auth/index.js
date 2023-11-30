import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user : JSON.parse(localStorage.getItem("userLogin")) || null 
}




const auth = createSlice({
    name: "auth",
    initialState,
    reducers:{
        _login : (state,action) =>{
         state.user = action.payload
        },
        _logout: (state)=>{
            state.user = false
        }

    }
})

export const {_login , _logout} = auth.actions

export default auth.reducer