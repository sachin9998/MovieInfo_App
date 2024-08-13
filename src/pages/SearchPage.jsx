import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../components/Card";

const SearchPage = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1)
  const navigate = useNavigate();

  console.log(".......", searchData);
  

  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/multi`, {
        params: { query: location?.search?.slice(3), page: page },
      });

      setSearchData((prev) => {
        return [...prev, ...response.data.results];
      });


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(1);
    setSearchData([]);
    fetchData();
  }, [location?.search])

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16">

      {/* Mobile version Search Box */}
      <div className="lg:hidden my-2 mx-1 sticky top-[70px] z-50">

        <input type="text" placeholder="Search here..." onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          className="px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900"
        />


      </div>

      <div className="container mx-auto ">

        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">Search Results</h3>

        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start">
          {searchData.map((data, index) => {
            {
              /* { exploreData.id + "exploreSection" } */
            }
            return (
              <Card
                data={data}
                key={data.id + "SearchSection" + index}
                media_type={data.media_type}
              />
            );
          })}
        </div>




      </div>
    </div>);
};

export default SearchPage;
