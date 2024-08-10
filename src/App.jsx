import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
