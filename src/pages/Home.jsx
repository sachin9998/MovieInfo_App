import { useSelector } from "react-redux";
import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {

  const trendingData = useSelector(state => state.movieoData.bannerData);

  const { data: topRatedTVShows } = useFetch("tv/top_rated");

  const { data: topRatedMovies } = useFetch("movie/top_rated");

  const { data: tvOnTheAir } = useFetch("tv/on_the_air");

  const { data: upcomingMovies } = useFetch("movie/upcoming");

  return (
    <div>
      <BannerHome />

      {/* Treding Now */}
      <HorizontalScrollCard data={trendingData} heading={"Trending Now"} trending={true} />

      {/* On Air Now */}
      <HorizontalScrollCard data={tvOnTheAir} heading={"On Air Now"} media_type={"tv"} />

      {/* Top Rated Movies */}
      <HorizontalScrollCard data={topRatedMovies} heading={"Top Rated Movies"} media_type={"movie"} />

      {/* Top Rated TV Shows */}
      <HorizontalScrollCard data={topRatedTVShows} heading={"Top Rated TV Shows"} media_type={"tv"} />

      {/* Upcoming Movies */}
      <HorizontalScrollCard data={upcomingMovies} heading={"Upcoming Movies"} media_type={"movie"} />

    </div>
  );
};

export default Home;
