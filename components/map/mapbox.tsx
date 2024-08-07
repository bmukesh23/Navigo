import { useContext, useEffect, useRef } from "react"
import { Map } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css';
import Markers from "./markers";
import { UserLocationContext } from "@/context/userLocationContext"
import { SourceCordiContext } from "@/context/sourceCordiContext";
import { DestinationCordiContext } from "@/context/destinationCordiContext";
import { DirectionDataContext } from "@/context/directionDataContext";
import MapboxRoute from "./mapboxRoute";
import { Skeleton } from "@/components/ui/skeleton"


const MAPBOX_DRIVING_ENDPOINT = "https://api.mapbox.com/directions/v5/mapbox/driving/";

const Mapbox = () => {
    const mapRef = useRef<any>();
    const { userLocation, setUserLocation } = useContext(UserLocationContext);
    const { sourceCordinates, setSourceCordinates } = useContext(SourceCordiContext);
    const { destinationCordinates, setDestinationCordinates } = useContext(DestinationCordiContext);
    const { directionData, setDirectionData } = useContext(DirectionDataContext);

    //use to fly to source marker
    useEffect(() => {
        if (sourceCordinates) {
            mapRef.current?.flyTo({
                center: [sourceCordinates.lng, sourceCordinates.lat],
                duration: 2500
            })
        }
    }, [sourceCordinates])

    //use to fly to destination marker
    useEffect(() => {
        if (destinationCordinates) {
            mapRef.current?.flyTo({
                center: [destinationCordinates.lng, destinationCordinates.lat],
                duration: 2500
            })
        }

        if (sourceCordinates && destinationCordinates) {
            getDirectionRoute();
        }
    }, [destinationCordinates])

    const getDirectionRoute = async () => {
        const res = await fetch(
            MAPBOX_DRIVING_ENDPOINT +
            sourceCordinates.lng +
            "," +
            sourceCordinates.lat +
            ";" +
            destinationCordinates.lng +
            "," +
            destinationCordinates.lat +
            "?overview=full&geometries=geojson" +
            "&access_token=" +
            process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const result = await res.json();
        setDirectionData(result);
    };

    return (
        <section className="p-5">
            <div className="rounded-lg overflow-hidden">
                {userLocation ?
                    <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[590px]">
                        <Map
                            ref={mapRef}
                            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
                            initialViewState={{
                                longitude: userLocation.lng,
                                latitude: userLocation.lat,
                                zoom: 14,
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '10px',
                            }}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                        >
                            <Markers />
                            {directionData?.routes && (
                                <MapboxRoute
                                    coordinates={directionData.routes[0].geometry.coordinates}
                                />
                            )}
                        </Map>
                    </div>
                    : <Skeleton className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[590px] rounded-sm bg-slate-500" />
                }
            </div>
        </section>
    )
}
export default Mapbox