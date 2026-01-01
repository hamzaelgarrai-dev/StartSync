import { apiSlice } from "../../api/apiSlice";

export const marketingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    subscribeNewsletter: builder.mutation({
      query: (email) => ({
        url: '/newsletter/subscribe',
        method: 'POST',
        body: { email },
      }),
    }),
  }),
})
export const { useSubscribeNewsletterMutation } = marketingApiSlice