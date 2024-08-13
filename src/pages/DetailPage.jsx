// /movie/32423
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails.js";
useSelector;

const DetailPage = () => {
  const params = useParams();
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const imageURL = useSelector((state) => state.movieoData.imageURL);

  console.log(castData);
  console.log(data);

  return (
    <div>

      <div className="w-full h-[280px]">

        {/* Movie or TV Show Cover Picture */}
        <div className="w-full h-full relative hidden lg:block">
          {data?.backdrop_path ? (
            <img src={imageURL + data.backdrop_path} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="b bg-neutral-900 h-full w-full relative flex justify-center items-center">
              No Image Found <br /> <br /> <br /> <br />
            </div>
          )}
        </div>

          {/* Gradient Effect */}
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent">
        </div>
      </div>

      {/* Movie or TV Show Profile Picture */}
      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">

        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit">
          {data?.poster_path ? (
            <img src={imageURL + data.poster_path} alt="" className="h-80 w-60 object-cover rounded" />
          ) : (
            <div className="h-80 w-60 rounded bg-neutral-900 flex justify-center items-center">
              No Image Found <br /> <br /> <br /> <br />
            </div>
          )}
        </div>

        {/* Title */}
        <div>
          <h1 className="text-xl font-bold ">{data.name || data.original_name}</h1>
        </div>
      </div>



    </div>
  );
};

export default DetailPage;
