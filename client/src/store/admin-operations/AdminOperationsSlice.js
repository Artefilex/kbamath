import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortOrder : "inc"
  }
  
const AdminOperationsSlice = createSlice({
    name:"adminOperations",
    initialState,
    reducers:{
      sortOrderButtonController: (state, action)=>{
        
        state.sortOrder = action.payload
      }
    }
})  

export const {sortOrderButtonController} = AdminOperationsSlice.actions

export default AdminOperationsSlice.reducer