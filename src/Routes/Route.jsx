
import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import AppDetails from '../Pages/AppDetails/AppDetails';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage> ,
    children:[
        {
            index: true,
            path:"/",
            Component: Home
        },
        {
          path:'/apps',
          element: <Apps></Apps>
        },
        {
          path: '/appDetails/:id',
          loader:()=>fetch('appsThirtyData.json'),
          Component: AppDetails
        }
    ]
  },
]);