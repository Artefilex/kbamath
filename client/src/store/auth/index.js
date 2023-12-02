import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user : JSON.parse(localStorage.getItem("userLogin")) || null ,
}




const auth = createSlice({
    name: "auth",
    initialState,
    reducers:{
        _login : (state) =>{
         state.user =  JSON.parse(localStorage.getItem("userLogin"))
      
        },
        _logout: (state)=>{
            state.user = null
            localStorage.removeItem("userLogin")       
        }

    }
})

export const {_login , _logout} = auth.actions

export default auth.reducer