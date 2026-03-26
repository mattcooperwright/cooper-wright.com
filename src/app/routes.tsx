import { createBrowserRouter } from "react-router";
import { IAmSittingInARoom } from "./pages/IAmSittingInARoom";

// Note: routing is currently handled by App.tsx / BrowserRouter.
// This file is kept for reference but not wired up in main.tsx.

export const router = createBrowserRouter([
  { path: "/sitting-in-a-room", Component: IAmSittingInARoom },
]);
