import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCollapsed : true
  };
  
const collapseSlice = createSlice({
    name : 'collapse',
    initialState, 
    reducers : {
handleCollapse : (state, action) => {
    state.isCollapsed = action.payload;
}
    }
    
})

export const { handleCollapse } = collapseSlice.actions;
export default collapseSlice.reducer;