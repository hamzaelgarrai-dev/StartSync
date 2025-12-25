import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const issuesApi = createApi({
  reducerPath: 'issuesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://api.localhost/api' }),
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: () => '/issues', 
      transformResponse: (response) => response.data,
      refetchOnMountOrArgChange: true,
      keepUnusedDataFor: 300
    }),
    getStats: builder.query({
      query: () => '/issues/stats', 
      refetchOnMountOrArgChange: true,
      keepUnusedDataFor: 300
    }),
  }),
})

export const { useGetIssuesQuery, useGetStatsQuery } = issuesApi
