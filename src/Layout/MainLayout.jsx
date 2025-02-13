import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import NavTop from "../Pages/Shared/Navbar/TopNav";

const MainLayout = () => {
  return (
    <div>
      <NavTop />

      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
