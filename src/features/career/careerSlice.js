import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  careerdata: [],
};

const careerSlice = createSlice({
  name: "career",
  initialState,
  reducers: {
    addCareer: (state, action) => {
      // console.log(action.payload);
      state.careerdata.push(action.payload);
      
    },
    deleteCareer: (state, action) => {
      // const  id = action.payload
      const idToDelete = action.payload;

      state.careerdata = state?.careerdata?.filter((item) => item.id !== idToDelete)
    console.log(state.careerdata);
    
    },
    editCareer: (state, action) => {
      const { id, title, content, location, responsibility, } = action.payload;
      // console.log(state.careerdata.filter(item  => item.id == id ));
      for(var i = 0; i < state.careerdata.length; i++){
        if(state.careerdata[i].id == id){
          state.careerdata[i].title = title
          state.careerdata[i].content = content
          state.careerdata[i].location = location
          state.careerdata[i].responsibility = responsibility
        }
      }
    },
    
  },
});

export const { addCareer, deleteCareer, editCareer } = careerSlice.actions;
export default careerSlice.reducer;
