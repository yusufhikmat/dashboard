import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import Layout from './components/layout/Layout';
import Posts from './pages/posts/Posts';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "users",
          element: <Users />
        },
        {
          path: "post",
          element: <Posts />
        },
      ],
      
    },
    {
      path: "login",
      element: <Login />
    },
    
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
