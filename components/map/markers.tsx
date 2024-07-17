import { useContext } from "react"
import { Marker } from "react-map-gl"
import { UserLocationContext } from "@/context/userLocationContext"
import { SourceCordiContext } from "@/context/sourceCordiContext";
import { DestinationCordiContext } from "@/context/destinationCordiContext";

const Markers = () => {
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    const { sourceCordinates, setSourceCordinates } = useContext(SourceCordiContext);
    const { destinationCordinates, setDestinationCordinates } = useContext(DestinationCordiContext);
    
    return (
        <div>
            <Marker
                longitude={userLocation?.lng}
                latitude={userLocation?.lat}
                anchor="bottom"
            >
                <img src="/next.svg" className="w-10 h-10" />
            </Marker>

            {/* Source location */}
            {sourceCordinates.length != 0 ? <Marker
                longitude={sourceCordinates?.lng}
                latitude={sourceCordinates?.lat}
                anchor="bottom"
            >
                <img src="/next.svg" className="w-10 h-10" />
            </Marker> : null}

            {/* Destination location */}
            {destinationCordinates.length != 0 ? <Marker
                longitude={destinationCordinates?.lng}
                latitude={destinationCordinates?.lat}
                anchor="bottom"
            >
                <img src="/next.svg" className="w-10 h-10" />
            </Marker> : null}
        </div>
    )
}
export default Markers