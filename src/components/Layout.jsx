import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-[40rem] mx-auto px-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
