import { configureStore } from '@reduxjs/toolkit'
import { userApi } from './api/userApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { productApi } from './api/productsApi'
import { postApi } from './api/postApi'
import { commentApi } from './api/commentApi'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath] : userApi.reducer,
    [productApi.reducerPath] : productApi.reducer,
    [postApi.reducerPath] : postApi.reducer,
    [commentApi.reducerPath] : commentApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>getDefaultMiddleware()
  .concat(userApi.middleware)
  .concat(productApi.middleware)
  .concat(postApi.middleware)
  .concat(commentApi.middleware)
})

setupListeners(store.dispatch)