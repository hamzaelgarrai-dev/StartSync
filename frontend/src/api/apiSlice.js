
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../src/features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://api.localhost/api',
    credentials: 'include',
     headers: { 'Content-Type': 'application/json' },
    prepareHeaders: (headers) => {
       const token = document.querySelector('meta[name="csrf-token"]')?.content
    if (token) headers.set('X-CSRF-TOKEN', token)
    headers.set('Accept', 'application/json')
    headers.set('Content-Type', 'application/json')
    return headers
    }
})

const baseQueryWithErrorHandling = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  
  if (result?.error?.status === 401) {
    api.dispatch(clearUser())
  }

  return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({})
})
