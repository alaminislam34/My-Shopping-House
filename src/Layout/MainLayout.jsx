import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import NavTop from "../Pages/Shared/Navbar/TopNav";

const MainLayout = () => {
  return (
    <div>
      <NavTop />

      <Navbar />
      <section className="">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default MainLayout;
