import { DirectionDataContext } from "@/context/directionDataContext";
import { useContext } from "react";

const DistanceTime = () => {
    const { directionData, setDirectionData } = useContext(DirectionDataContext);

    return (
        directionData?.routes &&
        <div className="text-white bg-blue-500 rounded-tl-md p-2">
            <h2>
                Distance:
                <span className="font-semibold mx-1 text-black">
                    {(directionData?.routes[0].distance * 0.000621371192).toFixed(0)} miles
                </span>
                Duration:
                <span className="ml-1 font-semibold text-black">
                    {(directionData?.routes[0].duration / 60).toFixed(0)} min
                </span>
            </h2>
        </div>
    )
}
export default DistanceTime