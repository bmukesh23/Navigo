import { DirectionDataContext } from "@/context/directionDataContext";
import carlist from "@/data/carlist";
import Image from "next/image";
import { useContext, useState } from "react";
import ethLogo from "@/public/eth-logo.png";

const Cars = () => {
  const [selectedCar, setSelectedCar] = useState<any>();
  const { directionData, setDirectionData } = useContext(DirectionDataContext);


  const getCost = (charges: any) => {
    // Convert distance from meters to miles
    const distanceInMiles = directionData.routes[0].distance * 0.000621371192;
    // Calculate the cost in ETH based on the distance in miles
    const costInETH = charges * distanceInMiles / 294117.65;
    return costInETH.toFixed(5);
  }

  return (
    <div className="mt-3">
      <h2 className="font-semibold text-slate-500 text-xs flex items-center justify-center">Choose a ride, or swipe up for more</h2>
      <div className="grid grid-cols-1">
        {carlist.map((item, index) => (
          <div key={index} className={`flex items-center justify-between m-2 p-2 border-[1px] rounded-md hover:border-blue-400 cursor-pointer ${index == selectedCar ? 'border-blue-400 border-2' : null}`}
            onClick={() => setSelectedCar(index)}>
            <div className="flex items-center gap-2">
              <Image
                src={item.image}
                alt={item.name}
                className="w-12"
              />
              <p className="text-xs mt-2 font-semibold">{item.name}</p>
            </div>

            <h2 className="text-xs text-gray-500 font-semibold">
              {directionData.routes ?
                <span className="flex items-center justify-center">
                  {getCost(item.charges)}
                  <Image src={ethLogo} alt="ETH" height={30} width={30}/>
                </span> : null
              }
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Cars;