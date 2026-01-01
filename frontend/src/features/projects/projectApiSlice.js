import { apiSlice } from "../../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({

    endpoints: (builder) =>({
        getProjects: builder.query({
            query:()=> "/projects",
            transformResponse: (response) => response.data,
            providesTags: ['Projects'],
            keepUnusedDataFor: 500,
        }),

        createProject: builder.mutation({
            query: (newProject) => ({
                url: "/projects",
                method: "POST",
                body: newProject,
            }),
            invalidatesTags: ['Projects'],
        }),

        

    })
})

export const {useGetProjectsQuery , useCreateProjectMutation } = projectApi