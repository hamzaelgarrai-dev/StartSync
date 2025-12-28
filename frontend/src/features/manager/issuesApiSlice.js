import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../../api/apiSlice'

export const issuesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: () => "/issues",
    
      transformResponse: (response) => response.data.data, 
      
      providesTags: ['Feedback'],
      keepUnusedDataFor: 300,
    }),

    getStats: builder.query({
      query: () => '/issues/stats',
      providesTags: ['FeedbackStats'],
      keepUnusedDataFor: 300,
    }),

    
    assignIssue: builder.mutation({
      query: ({ issueId, ...payload }) => ({
        url: `/issues/${issueId}/assign`,
        method: 'POST',
        body: payload,
      }),
      
      invalidatesTags: ['Feedback', 'FeedbackStats'],
    }),
  }),
})

export const { useGetIssuesQuery, useGetStatsQuery , useAssignIssueMutation} = issuesApi
