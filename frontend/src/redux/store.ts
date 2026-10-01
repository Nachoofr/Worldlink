
import referReducer from "./referBanner/referReducer";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: referReducer
})



// exporting types
// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']

export default store