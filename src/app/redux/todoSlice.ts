
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Todo{
    _id:string,
    text:string,
    completed:boolean;
}

const initialState = {
    todo:[] as Todo[],

    
}

export const todoSlice = createSlice({
    name:'todoo',
    initialState,
    reducers:{
        addTodo:(state, action) => {
            state.todo.push(action.payload)
            // state.userInfo = action.payload
        },
        deleteTodo:(state , action:PayloadAction<string>) => {
            state.todo = state.todo.filter((item) => item?._id !== action.payload)
        },
        removeTodo: (state)=>{
            state.todo = []
        }
    }
})
export const {addTodo, deleteTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;