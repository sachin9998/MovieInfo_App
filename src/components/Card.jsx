import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, trending, index, media_type }) => {

    const imageURL = useSelector(state => state.movieoData.imageURL)

    const mediaType = data.media_type ?? media_type

    return (
        <Link to={"/" + mediaType + "/" + data.id} className="w-full min-w-[230px] max-w-[230px] rounded h-80 overflow-hidden block relative hover:scale-105 transition-all">

            {
                data?.poster_path ? <img src={imageURL + data.poster_path} alt="" /> : <div className="b bg-neutral-800 h-full w-full flex justify-center items-center">No Image Found <br /> <br /> <br /> <br /></div>
            }


            <div className="absolute top-4">
                {
                    trending && (
                        <div className="py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden">
                            #{index} Trending
                        </div>)
                }
            </div>

            <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2">
                <h1 className="s text-ellipsis line-clamp-1 text-lg font-semibold">{data?.title || data?.name}</h1>

                <div className="text-sm text-neutral-400 flex justify-between items-center">

                    <p>{moment(media_type === "tv" ? data.first_air_date : data.release_date).format("MMM Do YYYY")}</p>

                    <p className="bg-black px-1 rounded-full text-xs text-white">Rating: {Number(data.vote_average).toFixed(1)}</p>
                </div>

            </div>

        </Link>
    )
}

export default Card;