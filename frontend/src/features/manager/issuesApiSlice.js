import { apiSlice } from '../../api/apiSlice'

export const issuesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIssues: builder.query({
      query: () => "/issues",
    
      transformResponse: (response) => response.data.data,   
      providesTags: ['Feedback'],
      keepUnusedDataFor: 500,
    }),

    getStats: builder.query({
      query: () => '/issues/stats',
      providesTags: ['FeedbackStats'],
      keepUnusedDataFor: 500,
    }),

    
    // assignIssue: builder.mutation({
    //   query: ({ issueId, ...payload }) => ({
    //     url: `/issues/${issueId}/assign`,
    //     method: 'POST',
    //     body: payload,
    //   }),
      
    //   invalidatesTags: ['Feedback', 'FeedbackStats'],
    // }),

    updateIssueStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/issues/${id}/status`,
        method: 'POST', 
    body: { 
      status,
      _method: 'PATCH' 
    },
      }),
    
      invalidatesTags: ['Feedback'], 
    }),

    getAssignedFeedbacks: builder.query({
      query: () => "/assigned-feedbacks",
      transformResponse: (response) => response.data || response, 
      providesTags: ['Feedback'],
      keepUnusedDataFor: 500,
    }),
  }),
})

export const { useGetIssuesQuery, useGetStatsQuery , useGetAssignedFeedbacksQuery, useGetMemberIssuesQuery , useUpdateIssueStatusMutation} = issuesApi
