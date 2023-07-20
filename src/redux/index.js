import { configSliceReducer } from "./slices/config";
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer:{
        config:configSliceReducer,
    },
})