import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Divider from "../components/Divider";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import Loader from "../components/Loader.jsx";
import useFetch from "../hooks/useFetch.js";
import useFetchDetails from "../hooks/useFetchDetails.js";
axios

const DetailPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (endpoint) => {
    try {
      // setLoading(true);
      const response = await axios.get(endpoint);
      setCastData(response.data);
    } catch (error) {
      console.log(error);
    }
    // setLoading(false);
  }

  // Fetching Required Data
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);

  // const { data: castData } = useFetchDetails(
  //   `/${params?.explore}/${params?.id}/credits`
  // );

  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendationData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  // Important Variables
  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
  const writer = castData?.crew
    ?.filter((el) => el?.job === "Writer")
    ?.map((el) => el?.name)
    ?.join(", ");


  useEffect(() => {
    fetchData(`/${params?.explore}/${params?.id}/credits`);
  }, [])

  // const director = castData?.crew[0]?.name || "OK";

  // console.log(director);


  // console.log(data);
  console.log("CAST DATA ::::: ", castData);
  // console.log("CAST DATA Actor ::::: ", castData?.crew[0]?.name);
  // console.log(data?.name);
  // console.log(data?.original_name);

  if (loading) {
    return <>
      <Loader />
    </>
  } else return (
    <div>

      <div className="w-full h-[280px] relative hidden lg:block">

        {/* Movie or TV Show Cover Picture */}
        <div className="w-full h-full">
          {data?.backdrop_path ? (
            <img
              src={imageURL + data.backdrop_path}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="b bg-neutral-900 h-full w-full relative flex justify-center items-center">
              No Image Found <br /> <br /> <br /> <br />
            </div>
          )}
        </div>

        {/* Gradient Effect */}
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent" />
      </div>

      {/* Movie or TV Show Profile Picture */}
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">

        {/* Profile Picture*/}
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          {data?.poster_path ? (
            <img
              src={imageURL + data.poster_path}
              alt=""
              className="h-80 w-60 object-cover rounded"
            />
          ) : (
            <div className="h-80 w-60 rounded bg-neutral-900 flex justify-center items-center">
              No Image Found <br /> <br /> <br /> <br />
            </div>
          )}
        </div>

        {/* Title */}
        <div className="lg:pt-3">
          <h1 className="text-white text-2xl font-bold lg:text-4xl">
            {data.title || data.original_title | data?.name || data?.original_name}
          </h1>

          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />

          <div className="flex items-center  gap-3">
            <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>

            <span>|</span>

            <p>View: {Number(data.vote_count)}</p>

            <span>|</span>

            <p>
              Duration: {duration[0]}h {duration[1]}m
            </p>
          </div>

          <Divider />

          <div>
            <h3 className="text-xl font-bold text-white mb-1">Overview</h3>

            <p>{data.overview}</p>

            <Divider />

            <div className="flex items-center gap-3 my-3 text-center">
              <p>Status: {data?.status}</p>
              <span>|</span>
              <p>
                Released Date :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
            </div>

            <Divider />

          </div>

          <div>
            {/* <p>
              <span className="text-white">Director</span> : {castData?.crew[0]?.name}
            </p> */}

            <Divider />

            <p>
              <span className="text-white">Writer</span> :{" "}
              {writer || "No Information Available"}
            </p>
          </div>

          <Divider />

          <h2 className="text-lg lg:text-2xl font-bold my-3">Cast :</h2>

          <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
            {castData?.cast
              ?.filter((el) => el?.profile_path)
              .map((item) => {
                return (
                  <div key={item.credit_id}>
                    <div>
                      <img
                        className="w-24 h-24 object-cover rounded-full"
                        src={imageURL + item.profile_path}
                        alt=""
                      />
                    </div>

                    <p className="font-bold text-center text-sm">{item.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard
          data={similarData}
          heading={"Similar " + params?.explore}
          media_type={params.explore}
        />

        <HorizontalScrollCard
          data={recommendationData}
          heading={"Recommended " + params?.explore}
          media_type={params.explore}
        />
      </div>
    </div>
  );
};

export default DetailPage;
