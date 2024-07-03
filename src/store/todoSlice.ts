import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type ITodo = {
    id: string;
    title: string;
    completed: boolean;
}


type ITodoState = {
    list: ITodo[];
    loading: string | null;
    error: string | null;
}

const initialState: ITodoState = {
    list: [],
    loading: null,
    error: null
}

export const fetchTodos = createAsyncThunk<ITodo[], undefined, { rejectValue: { error: string } }>(
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



const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.push({
                id: new Date().toISOString(),
                title: action.payload,
                completed: false
            })
        },
        toggleCompleted: (state, action: PayloadAction<string>) => {
            const completeTodo = state.list.find(todo => todo.id === action.payload);
            if (completeTodo) {
                completeTodo.completed = !completeTodo.completed
            }

        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(todo => todo.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = "loading";
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.loading = null;
                state.error = null;
                state.list = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.loading = null;
                state.error = action.payload!.error;
            })
    }
})

const { reducer, actions } = todoSlice;
export default reducer;
export const { addTodo, toggleCompleted, removeTodo } = actions;



