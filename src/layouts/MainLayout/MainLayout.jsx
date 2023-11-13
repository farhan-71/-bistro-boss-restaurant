import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Shared/Navbar/Navbar";
import Footer from "../../pages/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
