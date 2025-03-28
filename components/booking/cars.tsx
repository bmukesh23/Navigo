import { DirectionDataContext } from "@/context/directionDataContext";
import carlist from "@/data/carlist";
import Image from "next/image";
import { useContext, useState } from "react";
import ethLogo from "@/public/eth-logo.png";
import { Skeleton } from "../ui/skeleton";

interface CarsProps {
  setSelectedCar: React.Dispatch<React.SetStateAction<any>>;
}

const Cars: React.FC<CarsProps> = ({ setSelectedCar }) => {
  const [selectedCarIndex, setSelectedCarIndex] = useState<number | null>(null);
  const { directionData } = useContext(DirectionDataContext);

  const getCost = (charges: any) => {
    const distanceInMiles = directionData.routes[0].distance * 0.000621371192;
    const costInETH = charges * distanceInMiles / 1941178.65;
    return costInETH.toFixed(5);
  }

  const handleCarClick = (index: number, car: any) => {
    setSelectedCarIndex(index);
    setSelectedCar(car);
  }

  return (
    <div className="mt-3">
      <h2 className="font-semibold text-white text-xs flex items-center justify-center">Choose a ride, or swipe up for more</h2>
      <div className="grid grid-cols-1">
        {carlist.map((item, index) => (
          <div key={index} className={`flex items-center justify-between m-2 p-2 border-[1px] bg-gray-800 rounded-md hover:border-blue-400 cursor-pointer ${index == selectedCarIndex ? 'border-blue-400 border-2' : ''}`}
            onClick={() => handleCarClick(index, item)}>
            <div className="flex items-center gap-2">
              <Image
                src={item.image}
                alt={item.name}
                className="w-12"
              />
              {directionData.routes ?
                <div>
                  <p className="text-xs mt-2 font-semibold text-white">{item.name}</p>
                  <p className="text-[10px] text-blue-500">{item.min} min away</p>
                </div> : 
                <div className="space-y-2">
                  <Skeleton className="w-[100px] h-2 lg:w-[135px] md:h-3 rounded-sm bg-slate-400" />
                  <Skeleton className="w-[150px] h-2 lg:w-[155px] md:h-3 rounded-sm bg-slate-400" />
                </div>
              }
            </div>

            <h2 className="text-xs text-white font-semibold">
              {directionData.routes ?
                <span className="flex items-center justify-center">
                  {getCost(item.charges)}
                  <Image src={ethLogo} alt="ETH" height={40} width={40}/>
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