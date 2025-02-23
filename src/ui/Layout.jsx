import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="h-[90vh] bg-slate-50 overflow-x-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
