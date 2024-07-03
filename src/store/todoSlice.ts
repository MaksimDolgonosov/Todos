import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IToDo } from "../types/data";

// interface ITodo  {
//     id: number;
//     title: string;
//     completed: boolean;
// }


type ITodoState = {
    list: IToDo[];
    loading: boolean;
    error: string | null;
}

const initialState: ITodoState = {
    list: [],
    loading: false,
    error: null
}

export const fetchTodos = createAsyncThunk<IToDo[], undefined, { rejectValue: { error: string } }>(
    "todos/fetchTodos",
    async function (_, { rejectWithValue }) {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        if (!response.ok) {
            return rejectWithValue({ error: "server error" })
        }

        const data = await response.json();
        return data;

    }
)

export const fetchRemoveTodo = createAsyncThunk<number, number, { rejectValue: { error: string } }>(
    "todos/fetchRemoveTodo",
    async function (id, { rejectWithValue }) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            return rejectWithValue({ error: "Cant't delete task! server error" })
        }


        return id;

    }
)



const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.push({
                id: Math.random() * 1000,
                title: action.payload,
                completed: false
            })
        },
        toggleCompleted: (state, action: PayloadAction<number>) => {
            const completeTodo = state.list.find(todo => todo.id === action.payload);
            if (completeTodo) {
                completeTodo.completed = !completeTodo.completed
            }

        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.list = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload!.error;
            })

            .addCase(fetchRemoveTodo.fulfilled, (state, action) => {
                state.list = state.list.filter(todo => todo.id !== action.payload);
            })
            .addCase(fetchRemoveTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload!.error;
            })
    }
})

const { reducer, actions } = todoSlice;
export default reducer;
export const { addTodo, toggleCompleted, removeTodo } = actions;



