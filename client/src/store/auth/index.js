import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user : JSON.parse(localStorage.getItem("userLogin")) || null ,
  loading: false
}




const auth = createSlice({
    name: "auth",
    initialState,
    reducers:{
        _login : (state) =>{
         state.user =  JSON.parse(localStorage.getItem("userLogin"))
         if(state.user === null){
            state.loading= true
         }else{
            state.loading= false
         }
        },
        _logout: (state)=>{
            state.user = null
            localStorage.removeItem("userLogin")
            state.loading= false
        }

    }
})

export const {_login , _logout} = auth.actions

export default auth.reducer