import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projet/[title]", element: <ProjectPage /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
