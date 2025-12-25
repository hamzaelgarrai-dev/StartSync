import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const issuesApi = createApi({
  reducerPath: 'issuesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.localhost/api' }),
  credentials: 'include',
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: () => '/issues', 
      transformResponse: (response) => response.data,
    }),
    getStats: builder.query({
      query: () => '/issues/stats', 
    }),
  }),
})

export const { useGetIssuesQuery, useGetStatsQuery } = issuesApi
