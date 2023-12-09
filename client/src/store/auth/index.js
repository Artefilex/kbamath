import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
   user : JSON.parse(localStorage.getItem("userLogin")) ||  null ,
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
            toast.success("Görüşmek Üzere") 
        }

    }
})

export const {_login , _logout} = auth.actions

export default auth.reducer