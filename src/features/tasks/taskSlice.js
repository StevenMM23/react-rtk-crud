import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({ 
    name: "tasks",
    initialState : [1,2, "Steven Martinez"],
    reducers: { 
        addTask: (state,action) => { 
            state.push(action.payload)
        },
       
    }
})
export const {addTask} = taskSlice.actions
export default taskSlice.reducer