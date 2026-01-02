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

    deleteTeam : builder.mutation({
      query:(teamId) =>({
        url: `teams/${teamId}/`,
        method: 'DELETE',
      }),
      invalidatesTags: (teamId) => [
      { type: 'Teams', id: 'LIST' },
      { type: 'Teams', id: teamId } 
     ],
     async onQueryStarted(teamId, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
        apiSlice.util.updateQueryData('getTeams', undefined, (draft) => {
        return draft.filter((team) => team.id !== teamId)
      })
    );
    try {
      await queryFulfilled
    } catch {
      patchResult.undo()
    }
  }, 
    }),



    sendInvite: builder.mutation({
      query: ({ teamId, name, email }) => ({
        url: `/teams/${teamId}/invite`,
        method: 'POST',
        body: { name, email },
        
      }),
      
      invalidatesTags: ['Teams'], 
    }),
  }),
})

export const  { useGetTeamsQuery, useCreateTeamMutation, useSendInviteMutation, useDeleteTeamMutation }  = teamApi
