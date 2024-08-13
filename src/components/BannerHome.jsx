import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

const BannerHome = () => {

  const bannerData = useSelector(state => state.movieoData.bannerData);
  const imageURL = useSelector(state => state.movieoData.imageURL)

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev >= bannerData.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev <= 0 ? bannerData.length - 1 : prev - 1));
  };


  useEffect(() => {

    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 3000);


    return () => clearInterval(interval)
  }, [bannerData, imageURL])


  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {
          bannerData.map((data, index) => {
            return (
              <div key={data.id + "bannerHome" + index} className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all duration-500" style={{ transform: `translateX(-${currentImage * 100}%)` }}>

                <div className="w-full h-full">
                  <img src={imageURL + data.backdrop_path} alt={data.title || data.name} className="h-full w-full object-cover" />
                </div>

                {/* Next and Previous image */}
                <div className="absolute top-0 w-full h-full hidden items-center justify-between p-4 group-hover:lg:flex">

                  <button onClick={handlePrevious} type="button" className="bg-white p-1 rounded-full text-xl z-10 text-black">
                    <FaAngleLeft />
                  </button>

                  <button onClick={handleNext} type="button" className="bg-white p-1 rounded-full text-xl z-10 text-black">
                    <FaAngleRight />
                  </button>

                </div>

                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent" />

                <div className="container mx-auto">
                  <div className="container mx-auto w-full absolute bottom-0 max-w-md px-3">

                    <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-3xl">{data?.title || data.name}</h2>

                    <p className="ok text-ellipsis line-clamp-3 my-2">{data.overview}</p>

                    <div className="flex items-center gap-4">
                      <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                      <span>|</span>
                      <p>Views: {Number(data.popularity).toFixed(0)}</p>
                    </div>

                    <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                      Play Now
                    </button>

                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BannerHome