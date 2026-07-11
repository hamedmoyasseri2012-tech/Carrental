import { Outlet } from "react-router";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const MainLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
