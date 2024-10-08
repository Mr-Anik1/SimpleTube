import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Body } from "./components/Body";
import { ErrorPage } from "./components/ErrorPage";
import { Head } from "./components/Head";
import { MyProfile } from "./components/MyProfile";
import { appStore } from "./utils/appStore";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="overflow-x-hidden">
        <Head />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
