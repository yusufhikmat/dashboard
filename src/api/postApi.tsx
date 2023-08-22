import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../models/post.models'

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['Post'],
  endpoints: (builder) =>({
    getPosts :builder.query<Post[], void>({
      query :()=>'posts',
      providesTags:["Post"]
    }),
    getPost :builder.query<Post, string>({
      query :(id)=>`posts/${id}`,
      providesTags: ['Post'],
    }),
    addPost :builder.mutation({
      query : (addNewPost) =>({
        url : 'posts',
        method:'POST',
        body:addNewPost,
      }),
      invalidatesTags: ['Post'],
    }),

    updatePost :builder.mutation({
      query : ({id,...rest}) =>({
        url : `posts/${id}`,
        method:'PATCH',
        rest,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost:builder.mutation({
      query : (id) =>({
        url : `posts/${id}`,
        method:'DELETE',
      })
    }),
  })
})

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation, useUpdatePostMutation, useDeletePostMutation} = postApi;