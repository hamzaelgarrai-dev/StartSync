import { apiSlice } from '../../api/apiSlice'

export const feedbacksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeedbacks: builder.query({
      query: () => "/feedbacks",
    
      transformResponse: (response) => response.data.data,   
      providesTags: ['Feedback'],
      keepUnusedDataFor: 500,
    }),

    getFeedbacksStats: builder.query({
      query: () => '/feedbacks/stats',
      providesTags: ['FeedbackStats'],
      keepUnusedDataFor: 500,
    }),

    createFeedback: builder.mutation({
      query: (initialFeedback) => {
        const formData = new FormData();

        formData.append('title', initialFeedback.title);
        formData.append('description', initialFeedback.description);
        formData.append('priority', initialFeedback.priority);
        formData.append('project_id', initialFeedback.project_id);
            
        if (initialFeedback.image) {
          formData.append('image', initialFeedback.image); 
        }

        return {
          url: '/feedback',
          method: 'POST',
          body: formData,

        };
      },
      invalidatesTags: ['Feedback']
    }),

    
    // assignIssue: builder.mutation({
    //   query: ({ issueId, ...payload }) => ({
    //     url: `/issues/${issueId}/assign`,
    //     method: 'POST',
    //     body: payload,
    //   }),
      
    //   invalidatesTags: ['Feedback', 'FeedbackStats'],
    // }),

    updateFeedbacksStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/feedbacks/${id}/status`,
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

export const { useGetFeedbacksQuery, useGetFeedbacksStatsQuery , useCreateFeedbackMutation, useGetAssignedFeedbacksQuery, useUpdateFeedbacksStatusMutation} = feedbacksApi
