import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home'; 
import Add from './view/Add/Add';
import Show from './view/Show/Show';
import { Toaster } from 'react-hot-toast';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/add",
    element: <Add/>
  },
  {
    path: "/show",
    element: <Show/>
  },
  {
    path:"*",
    element:<h1>404 not found</h1>
  }
]);

root.render(
  <div>
<RouterProvider router={router}/>
<Toaster/>
</div>
);
