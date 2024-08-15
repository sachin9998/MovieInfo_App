import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import useFetchDetails from "../hooks/useFetchDetails";
import Loader from "./Loader";

const VideoPlay = ({ data, close, media_type }) => {
    // const [loading, setLoading] = useState(true);
    const { data: videoData, loading } = useFetchDetails(`/${media_type}/${data?.id}/videos`)


    // useEffect(() => {
    //     if (videoData) {
    //         setLoading(false);
    //     }
    // }, [videoData])

    return (
        <section className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center">
            <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded overflow-hidden relative">
                <button
                    className="absolute right-0 top-0 text-3xl p-2 "
                    onClick={close}
                >
                    <IoClose className="hover:cursor-pointer" />
                </button>

                {
                    loading ? <Loader /> : (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoData.results[0].key}`}
                            className='w-full h-full'
                        />
                    )
                }


            </div>
        </section>
    );
};

export default VideoPlay;
