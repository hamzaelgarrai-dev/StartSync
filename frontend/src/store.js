import { configureStore } from "@reduxjs/toolkit"
import { apiSlice } from "./api/apiSlice"
import authReducer from '../src/features/auth/authSlice'
import { issuesApi } from '../src/features/manager/issuesApiSlice'
import { teamApi } from "./features/manager/teamApiSlice"

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        [issuesApi.reducerPath]: issuesApi.reducer,
        
        [teamApi.reducerPath]:teamApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      issuesApi.middleware,
      teamApi.middleware
    ),
    
})