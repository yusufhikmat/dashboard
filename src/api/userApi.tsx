import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../models/user.models'

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) =>({
    getUsers :builder.query<User[], void>({
      query :()=>'users'
    }),
    getUser :builder.query<User, string>({
      query :(id)=>`/users/${id}`
    }),
    addUser :builder.mutation<void, User>({
      query : (body) =>({
        url : 'users',
        method:'POST',
        body,
      })
    }),
    updateUser :builder.mutation<User, Partial<User> & Pick<User, 'id'>>({
      query : ({id,...rest}) =>({
        url : `users/${id}`,
        method:'PUT',
        rest,
      })
    }),
    deleteUser:builder.mutation<void, string>({
      query : (id) =>({
        url : `users/${id}`,
        method:'DELETE',
      })
    }),
  })
})

export const { useGetUsersQuery, useGetUserQuery, useAddUserMutation, useUpdateUserMutation, useDeleteUserMutation} = userApi;