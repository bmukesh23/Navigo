import { useContext, useState } from "react";
import { ethers, parseUnits } from "ethers";
import Cars from "./cars";
import AutoCompleteAddress from "./auto-complete-address";
import { DirectionDataContext } from "@/context/directionDataContext";
import Loader from "../loader";

declare global {
  interface Window {
    ethereum?: any;
  }
}

const Booking: React.FC = () => {
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { directionData } = useContext(DirectionDataContext);

  const isMobile = () => {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  };

  const handlePayment = async () => {
    if (!selectedCar) {
      alert('Please select a car first.');
      return;
    }

    const charges = selectedCar.charges;
    const distanceInMiles = directionData.routes[0].distance * 0.000621371192;
    const costInETH = (charges * distanceInMiles / 1941178.65).toFixed(5);

    if (!costInETH) {
      alert('No charge available for the selected car.');
      return;
    }

    try {
      if (!window.ethereum) {
        throw new Error("No wallet found.");
      }

      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const tx = {
        to: process.env.NEXT_PUBLIC_METAMASK_RECEIVER_ADDRESS, // Replace with the recipient wallet address
        value: ethers.parseEther(costInETH.toString()),
      };
      setLoading(true);

      const sendTransaction = async () => {
        try {
          const transactionResponse = await signer.sendTransaction(tx);
          // console.log('Transaction Response:', transactionResponse);
          await transactionResponse.wait();
          // console.log('Transaction confirmed');
          alert('Payment successfull!');
          setLoading(false);
        } catch (error) {
          // console.error('Error making payment:', error);
          alert('Payment failed. Please try again.');
        } finally {
          setLoading(false);
        }
      };
      // await sendTransaction();

      if (isMobile()) {
        const deepLink = `https://metamask.app.link/send/${process.env.NEXT_PUBLIC_METAMASK_RECEIVER_ADDRESS}?value=${parseUnits(costInETH.toString(), 'ether')}`;
        window.location.href = deepLink;
      } else {
        await sendTransaction();
      }

    } catch (error) {
      console.error('Error making payment:', error);
      alert('Payment failed. Please try again.');
      setLoading(false);
    }
  };

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
            <Cars setSelectedCar={setSelectedCar} />
            <div className="flex items-center justify-center">
              {loading ?
                <div className="bg-blue-700 py-2 px-16 mt-2 rounded-md text-white font-semibold hover:cursor-pointer text-sm">
                  <Loader />
                </div> :
                <button
                  className="bg-blue-700 p-2 mt-2 rounded-md text-white font-semibold hover:bg-blue-500 hover:cursor-pointer text-xs lg:text-sm"
                  onClick={handlePayment}
                >
                  Pay with MetaMask
                </button>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Booking;