import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";


const store = configureStore({
    reducer: {
        todos: todoReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// export type RootTodo = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;