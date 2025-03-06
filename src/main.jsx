import React from "react";
import './assets/css/font.css'
import './assets/css/style.css'
import './assets/css/tailwind.css'
import { StrictMode } from "react";
import { router } from './router/router.jsx'
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)