import React from 'react'
import ReactDOM from 'react-dom/client'

import Root from './routes/Root/Root';
import Dashboard from './routes/dashboard/Dashboard';
import Temp from './routes/dashboard/AccountView';

import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/temp",
    element: <Temp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
