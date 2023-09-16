// src/app/store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import blogSlice from "../features/blogs/blogSlice";
import collapseSlice from "../features/collapse/collapseSlice";
import careerSlice from "../features/career/careerSlice";


const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  blog: blogSlice,
  collapse: collapseSlice,
  career: careerSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
