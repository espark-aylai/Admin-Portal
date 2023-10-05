import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.data.push(action.payload);  
    },


    deleteBlog: (state, action) => {
      const idToDelete = action.payload;
      console.log(idToDelete);
      state.data = state.data.filter(item => item.id != idToDelete);
   
    
    },

    editBlog: (state, action) => {
      const { id, title, content, excerpt } = action.payload;
      for(var i = 0; i < state.data.length; i++){
        if(state.data[i].id == id){
          state.data[i].title = title
          state.data[i].content = content
          state.data[i].excerpt = excerpt
        }
      }
    },
    
  },
});

export const { addBlog, deleteBlog, editBlog } = blogSlice.actions;
export default blogSlice.reducer;
