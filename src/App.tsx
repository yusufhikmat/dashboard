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
import Comments from './pages/comments/Comments';
import Calender from './pages/calender/Calender';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
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
          path: "posts",
          element: <Posts />
        },
        {
          path: "comments",
          element: <Comments />
        },
        {
          path: "calender",
          element: <Calender />
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
