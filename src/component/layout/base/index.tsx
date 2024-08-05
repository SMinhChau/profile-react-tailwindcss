import Footer from "@/component/footer";
import Header from "@/component/header";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
  return (
    <div className="container mx-auto h-dvh w-full flex flex-col items-start px-[10%] sm:px-[7%]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default BaseLayout;
