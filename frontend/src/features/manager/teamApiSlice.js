import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.localhost/api' }),
  credentials: 'include',
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => '/teams', 
      transformResponse: (response) => response.data,
    }),
  }),
})

export const  { useGetTeamsQuery }  = teamApi
