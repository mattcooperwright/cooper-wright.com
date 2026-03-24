import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "work", Component: Work },
      { path: "contact", Component: Contact },
      // Add more routes here as you build new pages:
      // { path: "sitting-in-a-room", Component: IAmSittingInARoom },
    ],
  },
]);
