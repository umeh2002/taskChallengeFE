import { createBrowserRouter } from "react-router-dom";
import Layout from "../statics/Layout";
import Register from "../auth/Register";
import SignIn from "../auth/SignIn";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import MessageBox from "../pages/MessageBox";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[{
        index:true,
        element:<Landing/>
    }]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/:token/sign-in",
    element: <SignIn />,
  },
  {
    path: "/message",
    element: <MessageBox/>,
  },
  {
    path: "/:home",
    element: 
    <PrivateRouter>
      <Home/>
    </PrivateRouter>
  },
]);
