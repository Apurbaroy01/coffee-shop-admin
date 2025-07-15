import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/SignUp';
import AuthProviders from './AuthProviders/AuthProviders';
import DashBoard from './Components/DashBoard/DashBoard';
import AddCoffee from './Components/DashBoard/AddCoffee';
import UpdateCoffee from './Components/DashBoard/UpdateCoffee';
import EditCoffee from './Components/DashBoard/EditCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Navigate to={"/login"}></Navigate>,
      },
      {
        path: '/DashBoard',
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: "addcoffee",
            element: <AddCoffee></AddCoffee>,
          },
          {
            path: "updatecoffee",
            element: <UpdateCoffee></UpdateCoffee>,
            loader: () => fetch('http://localhost:5000/coffee')
          },
          {
            path: "deletecoffee",
            element: <AddCoffee></AddCoffee>,
          },
          {
            path: "updatecoffee/:id",
            loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
            element: <EditCoffee></EditCoffee>,
          },
        ]
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ]
  },

  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },

]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>,
)
