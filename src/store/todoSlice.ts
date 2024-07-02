import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ITodo = {
    id: string;
    title: string;
    completed: boolean;
}


type ITodoState = {
    list: ITodo[];
}

const initialState: ITodoState = {
    list: [],
}

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

})

const { reducer, actions } = todoSlice;
export default reducer;
export const { addTodo, toggleCompleted, removeTodo } = actions;


// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type Todo = {
//   id: string;
//   title: string;
//   completed: boolean;
// }

// type TodosState = {
//   list: Todo[];
// }

// const initialState: TodosState = {
//   list: [],
// }

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo(state, action: PayloadAction<string>) {
//       state.list.push({
//         id: new Date().toISOString(),
//         title: action.payload,
//         completed: false,
//       });
//     },
//     toggleComplete(state, action: PayloadAction<string>) {
//       const toggledTodo = state.list.find(todo => todo.id === action.payload);
//       if (toggledTodo) {
//         toggledTodo.completed = !toggledTodo.completed;
//       }
//     },
//     removeTodo(state, action: PayloadAction<string>) {
//       state.list = state.list.filter(todo => todo.id !== action.payload);
//     }
//   },
// });

// export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

// export default todoSlice.reducer;