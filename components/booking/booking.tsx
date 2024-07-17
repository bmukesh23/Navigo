import AutoCompleteAddress from "./auto-complete-address"
import Cars from "./cars"

const Booking = () => {
  return (
    <div className="p-5">
      <div className="border p-5 rounded-md h-[80vh]">
        <AutoCompleteAddress />
        <Cars/>
        <button className="bg-blue-700 p-2 rounded-md text-white font-semibold hover:bg-blue-500 hover:cursor-pointer">Pay with Metamask</button>
      </div>
    </div>
  )
}
export default Booking