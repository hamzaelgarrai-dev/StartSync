import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => '/teams', 
      refetchOnMountOrArgChange: true,
      keepUnusedDataFor: 300
      
    }),
  }),
})

export const  { useGetTeamsQuery }  = teamApi
