import { useContext, useState } from "react";
import { ethers, parseUnits } from "ethers";
import Cars from "./cars";
import AutoCompleteAddress from "./auto-complete-address";
import { DirectionDataContext } from "@/context/directionDataContext";
import Loader from "../loader";
import { toast } from 'react-toastify';
import router from "next/router";

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
      toast.error('Please select a car first.');
      return;
    }

    const charges = selectedCar.charges;
    const distanceInMiles = directionData.routes[0].distance * 0.000621371192;
    const costInETH = (charges * distanceInMiles / 1941178.65).toFixed(5);

    if (!costInETH) {
      toast.error('No charge available for the selected car.');
      return;
    }

    if (isMobile()) {
      // Mobile-specific payment flow
      try {
        const valueInHex = parseUnits(costInETH.toString(), 'ether');
        const deepLink = `https://metamask.app.link/send/${process.env.NEXT_PUBLIC_METAMASK_RECEIVER_ADDRESS}?value=${valueInHex}&chain=sepolia`;
        window.location.href = deepLink;

        // const provider = new ethers.BrowserProvider(window.ethereum);
        // provider.once('block', async () => {
        //   toast.success('Payment successful!');
        //   setSource('');
        //   setDestination('');
        //   router.push('/');
        // });

      } catch (error) {
        setLoading(false);
      }
    } else {
      // Desktop-specific payment flow
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
            toast.success('Payment successfull!');
            setSource('');
            setDestination('');
            setLoading(false);
          } catch (error) {
            // console.error('Error making payment:', error);
            toast.error('Payment failed. Please try again.');
          } finally {
            setLoading(false);
          }
        };
        await sendTransaction();
      } catch (error) {
        console.error('Error making payment:', error);
        toast.error('Payment failed. Please try again.');
        setLoading(false);
      }
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