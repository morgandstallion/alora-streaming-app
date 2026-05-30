import { createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {},
]);

export default router;
