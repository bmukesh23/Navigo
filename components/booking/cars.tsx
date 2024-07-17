import carlist from "@/data/carlist";
import Image from "next/image";

const Cars = () => {
  return (
    <div className="mt-3">
      <h2 className="font-semibold">Select Car</h2>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
        {carlist.map((item, index) => (
          <div key={index}>
            <Image
              src={item.image}
              alt={item.name}
              height={80}
              width={80}
              className="pt-3"
            />
            <h2>{item.name}</h2>
            <span>{(item.charges/294117.65).toFixed(5)} ETH</span>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Cars;