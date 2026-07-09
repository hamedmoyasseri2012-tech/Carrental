import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Pages/Home.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import MainLayOut from "./layout/MainLayOut.tsx";
import Cars from "./Pages/Cars.tsx";
import MyBookings from "./Pages/MyBookings.tsx";
import CarsList from "./Pages/CarsList.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      {
        index: true,
        Component: App,
      },

      {
        path: "cars",
        Component: Cars,
      },
      {
        path: "my-bookings",
        Component: MyBookings,
      },
      {
        path: "ListCars",
        Component: CarsList,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
