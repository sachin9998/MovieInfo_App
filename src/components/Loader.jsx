import { InfinitySpin } from "react-loader-spinner"

const Loader = () => {
    return (
        <div className="h-[93vh] lg:h-[85vh] flex justify-center items-center">
            {/* <div className="progress pulse">
            </div> */}

            <InfinitySpin
                visible={true}
                width="200"
                color="#ff9007"
                ariaLabel="infinity-spin-loading"
            />

        </div>
    )
}

export default Loader