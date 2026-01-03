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

    getProjectMembers: builder.query({
      query: (projectId) => `/projects/${projectId}/members`,
      providesTags: ['ProjectMembers'],
    }),
    
    assignFeedback: builder.mutation({
      query: ({ feedbackId, userId }) => ({
      url: `/feedback/${feedbackId}/assign`, 
      method: 'POST',
      body: { assigned_to_user_id: userId }, 
     }),
      invalidatesTags: ['Feedback'],
  }),


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

export const { useGetFeedbacksQuery, useGetFeedbacksStatsQuery , useCreateFeedbackMutation, useGetAssignedFeedbacksQuery, useUpdateFeedbacksStatusMutation, useAssignFeedbackMutation, useGetProjectMembersQuery} = feedbacksApi
