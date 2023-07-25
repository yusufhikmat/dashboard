import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "products",
      element: <Products />
    },
    {
      path: "users",
      element: <Users />
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
