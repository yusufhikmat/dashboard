import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../models/product.models'

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'}),
  tagTypes: ['Product'],
  endpoints: (builder) =>({
    getProducts :builder.query<Product[], void>({
      query :()=>'products',
      providesTags:["Product"]
    }),
    getProduct :builder.query<Product, string>({
      query :(id)=>`products/${id}`,
      providesTags: ['Product'],
    }),
    addProduct :builder.mutation({
      query : (addNewUser) =>({
        url : 'products',
        method:'POST',
        body:addNewUser,
      }),
      invalidatesTags: ['Product'],
    }),

    updateProduct :builder.mutation({
      query : ({id,...rest}) =>({
        url : `products/${id}`,
        method:'PATCH',
        rest,
      }),
      invalidatesTags: ['Product'],
    }),
    deleteProduct:builder.mutation({
      query : (id) =>({
        url : `products/${id}`,
        method:'DELETE',
      })
    }),
  })
})

export const { useGetProductsQuery, useGetProductQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation} = productApi;