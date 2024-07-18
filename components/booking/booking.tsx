import { useState } from "react";
import AutoCompleteAddress from "./auto-complete-address";
import Cars from "./cars";

const Booking: React.FC = () => {
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');

  return (
    <div className="p-5">
      <div className="border p-5 rounded-md h-[80vh] overflow-y-scroll custom-scrollbar">
        <AutoCompleteAddress
          source={source}
          setSource={setSource}
          destination={destination}
          setDestination={setDestination}
        />
        {source && destination && (
          <>
            <Cars />
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-700 p-2 mt-2 rounded-md text-white font-semibold hover:bg-blue-500 hover:cursor-pointer text-sm"
              >
                Pay with Metamask
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;