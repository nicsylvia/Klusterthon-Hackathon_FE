import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandinPage/LandingPage";
import LandingPageLayout from "../Layout/LandingPageLayout/LandingPageLayout";
// import Login from "../AuthPages/Login";
import SelectAccount from "../AuthPages/SelectAccount";
import Login from "../AuthPages/UserAuth/User.Login";
import BizzSignUp from "../AuthPages/BusinessAuth/Business.Register";
import BizzLogin from "../AuthPages/BusinessAuth/Business.Login";
import UserDashboardLayout from "../Layout/DashBoardLayour/UserDashboard/UseDashboardLayout";
import UserHome from "../pages/DashBoardPages/UserHome/UserHome";
<<<<<<< HEAD
import UserProfile from "../pages/DashBoardPages/UserProfile";
import UserCards from "../pages/DashBoardPages/UserCards/UserCards";
import UserNotify from "../pages/DashBoardPages/UserNotify/UserNotify";
// import DetailCard from "../pages/DashBoardPages/DetailCard/DetailCard";
=======
import UserProfile from "../pages/DashBoardPages/UserProfile/UserProfile";
import BusinessRoutes from "../Layout/AdminDashBoardLayout/BusinessRoutes";
import BusinessCard from "../pages/AdminDashboard/BusinessCard";
import BusinessHome from "../pages/AdminDashboard/BusinessHome";
>>>>>>> 9235b64d168eeda67a463ff49fe4472e07a9138e

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/get-started",
    element: <SelectAccount />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/business-register",
    element: <BizzSignUp />,
  },
  {
    path: "business-login",
    element: <BizzLogin />,
  },

  {
    path: "/user-dashboard",
    element: <UserDashboardLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: "/user-dashboard/profile",
        element: <UserProfile />,
      },
      {
        path: "/user-dashboard/mycards",
        element: <UserCards />,
      },
      {
        path: "/user-dashboard/notify",
        element: <UserNotify />,
      },
      // {
      //   path: "/user-dashboard/card/:id",
      //   element: <DetailCard />,
      // },
    ],
  },
  {
    path: "/business-dashboard", // This is your parent route
    element: <BusinessRoutes />,
    children: [
      {
        index: true,
        element: <BusinessHome />,
        // path: "/dashboard", // Nested route path within BusinessRoutes
      },
      {
        path: "/business-dashboard/giftcard", // Nested route path within BusinessRoutes
        element: <BusinessCard />,
      },
    ],
  },
]);
