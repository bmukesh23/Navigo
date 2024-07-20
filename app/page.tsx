"use client";
import Booking from "@/components/booking/booking";
import Home from "@/components/home";
import Mapbox from "@/components/map/mapbox";
import { DestinationCordiContext } from "@/context/destinationCordiContext";
import { DirectionDataContext } from "@/context/directionDataContext";
import { SourceCordiContext } from "@/context/sourceCordiContext";
import { UserLocationContext } from "@/context/userLocationContext";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Page() {
  const [userLocation, setUserLocation] = useState<any>();
  const [sourceCordinates, setSourceCordinates] = useState<any>([]);
  const [destinationCordinates, setDestinationCordinates] = useState<any>([]);
  const [directionData, setDirectionData] = useState<any>([]);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }

  return (
    <section>
      <SignedOut>
        <Home />
      </SignedOut>

      <SignedIn>
        <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
          <SourceCordiContext.Provider value={{ sourceCordinates, setSourceCordinates }}>
            <DestinationCordiContext.Provider value={{ destinationCordinates, setDestinationCordinates }}>
              <DirectionDataContext.Provider value={{ directionData, setDirectionData }}>
                <div className="flex flex-col lg:grid lg:grid-cols-3">
                  <div className="lg:order-2 lg:col-span-2">
                    <Mapbox />
                  </div>
                  <div className="lg:order-1">
                    <Booking />
                  </div>
                </div>
              </DirectionDataContext.Provider>
            </DestinationCordiContext.Provider>
          </SourceCordiContext.Provider>
        </UserLocationContext.Provider>
      </SignedIn>
    </section>
  );
}