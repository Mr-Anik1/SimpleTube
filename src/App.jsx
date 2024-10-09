import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Body } from "./components/Body";
import { ErrorPage } from "./components/ErrorPage";
import { MainContainer } from "./components/MainContainer";
import { MyProfile } from "./components/MyProfile";
import { WatchVideo } from "./components/WatchVideo";
import { appStore } from "./utils/appStore";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div className="overflow-x-hidden">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
