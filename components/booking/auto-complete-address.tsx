import { DestinationCordiContext } from "@/context/destinationCordiContext";
import { SourceCordiContext } from "@/context/sourceCordiContext";
import { useContext, useEffect, useState } from "react";

const session_token = '5ccce4a4-ab0a-4a7c-943d-580e55542363';
const MAPBOX_RETRIEVE_URL = 'https://api.mapbox.com/search/searchbox/v1/retrieve/';

interface AutoCompleteAddressProps {
  source: string;
  setSource: React.Dispatch<React.SetStateAction<string>>;
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
}

const AutoCompleteAddress: React.FC<AutoCompleteAddressProps> = ({
  source,
  setSource,
  destination,
  setDestination,
}) => {
  const [sourceChange, setSourceChange] = useState<boolean>(false);
  const [destinationChange, setDestinationChange] = useState<boolean>(false);

  const { sourceCordinates, setSourceCordinates } = useContext(SourceCordiContext);
  const { destinationCordinates, setDestinationCordinates } = useContext(DestinationCordiContext);

  const [sourceAddressList, setSourceAddressList] = useState<any[]>([]);
  const [destinationAddressList, setDestinationAddressList] = useState<any[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (sourceChange) {
        getAddressList(source, setSourceAddressList);
      } else if (destinationChange) {
        getAddressList(destination, setDestinationAddressList);
      }
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [source, destination, sourceChange, destinationChange]);

  const getAddressList = async (query: string, setAddressList: (list: any[]) => void) => {
    setAddressList([]);
    const res = await fetch('/api/search-address?q=' + query, {
      headers: {
        "Content-Type": "application/json",
      }
    });

    const result = await res.json();

    if (result.suggestions && Array.isArray(result.suggestions)) {
      const validSuggestions = result.suggestions.filter((item: any) => item.place_formatted || item.full_address);
      setAddressList(validSuggestions);
    } else {
      setAddressList([]);
    }
  };

  const onSourceAddressClick = async (item: any) => {
    setSource(item.place_formatted || item.full_address);
    setSourceAddressList([]);
    setSourceChange(false);

    const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id
      + "?session_token=" + session_token
      + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);

    const result = await res.json();

    setSourceCordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
  };

  const onDestinationAddressClick = async (item: any) => {
    setDestination(item.place_formatted || item.full_address);
    setDestinationAddressList([]);
    setDestinationChange(false);

    const res = await fetch(MAPBOX_RETRIEVE_URL + item.mapbox_id
      + "?session_token=" + session_token
      + "&access_token=" + process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN);

    const result = await res.json();

    setDestinationCordinates({
      lng: result.features[0].geometry.coordinates[0],
      lat: result.features[0].geometry.coordinates[1],
    });
  };

  return (
    <section>
      <div className='relative'>
        <label className='text-gray-400 text-sm font-semibold'>Where From?</label>
        <input
          type="text"
          placeholder="Search for an address or landmark"
          className='p-1 w-full rounded-md outline-none text-sm border'
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setSourceChange(true);
          }}
        />
        {sourceAddressList.length > 0 && sourceChange &&
          <div className='shadow-md p-1 rounded-md absolute w-full bg-white z-20'>
            {sourceAddressList.map((item: any, index: number) => (
              <h2 key={index} className='p-3 hover:bg-gray-100 cursor-pointer' onClick={() => onSourceAddressClick(item)}>
                {item.place_formatted || item.full_address}
              </h2>
            ))}
          </div>
        }
      </div>

      <div className='relative mt-4'>
        <label className='text-gray-400 text-sm font-semibold'>Where To?</label>
        <input
          type="text"
          className='p-1 w-full rounded-md outline-none text-sm border'
          value={destination}
          placeholder="Enter destination"
          onChange={(e) => {
            setDestination(e.target.value);
            setDestinationChange(true);
          }}
        />
        {destinationAddressList.length > 0 && destinationChange &&
          <div className='shadow-md p-1 rounded-md absolute w-full bg-white z-20'>
            {destinationAddressList.map((item: any, index: number) => (
              <h2 key={index} className='p-3 hover:bg-gray-100 cursor-pointer' onClick={() => onDestinationAddressClick(item)}>
                {item.place_formatted || item.full_address}
              </h2>
            ))}
          </div>
        }
      </div>
    </section>
  );
};

export default AutoCompleteAddress;