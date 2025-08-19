import { createBrowserRouter } from "react-router";

// Import the main app component
import App from "./App";
import Programs from "./pages/Programs/Programs";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Programs />,
        path: "/programs",
      },
    ],
  },
]);

export default router;
