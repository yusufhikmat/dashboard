import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Comment } from '../models/comment.models';

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  tagTypes: ['Comment'],
  endpoints: (builder) =>({
    getComments :builder.query<Comment[], void>({
      query :()=>'comments',
      providesTags:["Comment"]
    }),
    getComment :builder.query<Comment, string>({
      query :(id)=>`comments/${id}`,
      providesTags: ['Comment'],
    }),
    addComment :builder.mutation({
      query : (addNewComment) =>({
        url : 'comments',
        method:'POST',
        body:addNewComment,
      }),
      invalidatesTags: ['Comment'],
    }),

    updateComment :builder.mutation({
      query : ({id,...rest}) =>({
        url : `comments/${id}`,
        method:'PATCH',
        rest,
      }),
      invalidatesTags: ['Comment'],
    }),
    deleteComment:builder.mutation({
      query : (id) =>({
        url : `comments/${id}`,
        method:'DELETE',
      })
    }),
  })
})

export const { useGetCommentsQuery, useGetCommentQuery, useAddCommentMutation, useUpdateCommentMutation, useDeleteCommentMutation} = commentApi;