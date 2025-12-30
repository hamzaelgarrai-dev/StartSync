import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../../api/apiSlice'

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query({
      query: () => '/teams',
      transformResponse: (response) => response.data.data, 
      providesTags: ['Teams'], 
      keepUnusedDataFor: 500,
    }),
    createTeam: builder.mutation({
      query: (newTeam) => ({
        url: '/teams',
        method: 'POST',
        body: newTeam,
       
      }),
     
      invalidatesTags: ['Teams'], 
    }),
    sendInvite: builder.mutation({
      query: ({ teamId, email }) => ({
        url: `/teams/${teamId}/invite`,
        method: 'POST',
        body: { email },
        
      }),
      
      invalidatesTags: ['Teams'], 
    }),
  }),
})

export const  { useGetTeamsQuery, useCreateTeamMutation, useSendInviteMutation }  = teamApi
