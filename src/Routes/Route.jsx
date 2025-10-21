
import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Apps from '../Pages/Apps/Apps';
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Installation from '../Pages/Installation/Installation';
import Home from '../Pages/Home/Home';





export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
        {
            index: true,
            element:<Home></Home>
        },
        {
          path:'/apps',
          element: <Apps></Apps>
        },
        {
          path:'/installation',
          element: <Installation></Installation>
        },
        {
          path:'/installation/:id',
          loader:()=>fetch('/appsThirtyData.json').then(res => res.json()),
          element: <Installation></Installation>
        },
        {
          path: '/appDetails/:id',
          loader:()=>fetch('/appsThirtyData.json').then(res => res.json()),
          element: <AppDetails></AppDetails>
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
    ]
  },
]);