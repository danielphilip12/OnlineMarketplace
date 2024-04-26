import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import HomePage from "./components/HomePage/HomePage";
import ItemPage, { loader as itemLoader } from "./components/ItemPage/ItemPage";
import AddItem from "./components/AddItem/AddItem";
import Wrapper from "./components/Wrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <ItemPage />,
        loader: itemLoader,
      },
      {
        path: "/item/addItem",
        element: <AddItem />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
