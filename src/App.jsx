import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import UserProvider from "./components/UserProvider";
import NotFoundPage from "./routes/NotFoundPage";
import Layout from "./components/Layout";
import AboutPage from "./routes/AboutPage";
import NotesPage from "./routes/NotesPage";
import SelectedNotePage, { noteLoader } from "./routes/SelectedNotePage";
import CreateNote from "./routes/CreateNote";
import EditPage from "./routes/EditPage";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    errorElement: <Navigate to={"/404"} />,
    children: [
      {
        path: "/",
        index: true,
        element: <AboutPage />,
      },
      {
        path: "/notes/add",
        element: <CreateNote />,
      },
      {
        path: "/notes/:id/edit",
        element: <EditPage />,
        loader: noteLoader,
      },
      {
        path: "/notes/:id",
        element: <SelectedNotePage />,
        loader: noteLoader,
      },
      {
        path: "/notes",
        element: <NotesPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </Provider>
  );
}

export default App;
