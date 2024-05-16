import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="max-w-screen-md min-h-screen mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
