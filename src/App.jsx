import axios from "axios";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";

const App = () => {

  // Fetching trending data
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get('trending/all/week')
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTrendingData();
  }, [])


  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
};

export default App;