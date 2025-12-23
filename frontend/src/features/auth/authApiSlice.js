import { apiSlice } from "../../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
    }),
    me: builder.query({
      query: () => '/me',
    }),
  }),
})

export const { useLoginMutation, useMeQuery } = authApi