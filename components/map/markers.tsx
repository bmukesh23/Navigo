import { useContext } from "react"
import { Marker } from "react-map-gl"
import { UserLocationContext } from "@/context/userLocationContext"
import { SourceCordiContext } from "@/context/sourceCordiContext";
import { DestinationCordiContext } from "@/context/destinationCordiContext";
import { useUser } from "@clerk/nextjs";

const Markers = () => {
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    const { sourceCordinates, setSourceCordinates } = useContext(SourceCordiContext);
    const { destinationCordinates, setDestinationCordinates } = useContext(DestinationCordiContext);
    const { user } = useUser();

    return (
        <div>
            {/* User location */}
            {user &&
                <Marker
                    longitude={userLocation?.lng}
                    latitude={userLocation?.lat}
                    anchor="bottom"
                >
                    <img src={user?.imageUrl || "/next.svg"} className="w-6 h-6 rounded-full border-2 border-white ring-2 ring-black" />
                </Marker>
            }

            {/* Source location */}
            {sourceCordinates.length != 0 ? <Marker
                longitude={sourceCordinates?.lng}
                latitude={sourceCordinates?.lat}
                anchor="bottom"
            >
                <div className="bg-red-600 rounded-full w-2 h-2 p-2 border-2 border-white ring-2 ring-black" />
            </Marker> : null}

            {/* Destination location */}
            {destinationCordinates.length != 0 ? <Marker
                longitude={destinationCordinates?.lng}
                latitude={destinationCordinates?.lat}
                anchor="bottom"
            >
                <div className="bg-green-600 rounded-full w-2 h-2 p-2 border-2 border-white ring-2 ring-black" />
            </Marker> : null}
        </div>
    )
}
export default Markers