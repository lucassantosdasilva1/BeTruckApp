import {createSlice} from "@reduxjs/toolkit"

const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        data: [],
    },
    reducers: {
        // setPostsAction(state: any, {payload} : {payload : PostDTO[]}){
        setDataAction(state: any, {payload}){
            state.data = payload;
        }
    }

})

export const {setDataAction} = dataSlice.actions;
export const dataSliceReducer = dataSlice.reducer;