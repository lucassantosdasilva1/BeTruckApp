import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import {dataSliceReducer} from './dataSlice'

const reducersList = combineReducers({
    dataSliceReducer,
})

export const store = configureStore ({
    reducer: {
        reducersList
    }
})

export type RootState = ReturnType<typeof store.getState>