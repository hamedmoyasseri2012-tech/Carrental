import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

export interface ICarData {
  brand: string;
  category: string;
  createdAt: string;
  description: string;
  fuel_type: string;
  image: string;
  isAvaliable: boolean;
  location: string;
  model: string;
  owner: string;
  pricePerDay: number;
  seating_capacity: number;
  transmission: string;
  updatedAt: string;
  year: number;
  __v: 0;
  _id: string;
}

const Cars = () => {
  const [cars, setCars] = useState<ICarData[]>([]);

  const [search, setSearch] = useState("");

  const filteredCars = cars.filter((car) => {
    const matchSearch =
      car.brand.toLowerCase().includes(search.toLowerCase()) ||
      car.model.toLowerCase().includes(search.toLowerCase()) ||
      car.category.toLowerCase().includes(search.toLowerCase());

    return matchSearch;
  });

  useEffect(() => {
    axios
      .get("https://carrental-server.greatstack.in/api/user/cars")
      .then((response) => {
        setCars(response.data.cars);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center text-center items-center gap-2 bg-[#f1f5f9]  w-93.75 h-80">
        <h1 className="text-4xl font-bold">Available Cars</h1>
        <p className="text-[#6a7282e6] text-[14px] font-medium">
          Browse our selection of premium vehicles available for your next
          adventure
        </p>
        <div className="flex w-86 h-12 bg-white rounded-xl justify-between p-2 border-white items-center gap-2 border">
          <img className="w-4.5 h-4.5" src="./public/search.svg" alt="" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className=" flex-1 items-center outline-none font-medium text-[#6a7282]"
            placeholder="Search by make, model, or features"
          />
          <img className="w-4.5 h-4.5" src="./public/filter.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10 mb-50">
        <p className="flex items-start font-medium pr-40 text-[#6a7282]">
          Showing
          {filteredCars.length}
          Cars
        </p>
        <div className="flex flex-col justify-center items-center pt-8 gap-6 ">
          {filteredCars.map((car) => (
            <Link
              to={`/cars/${car._id}`}
              className="flex flex-col justify-center  items-center bg-[#f1f4f9] relative"
              key={car._id}
            >
              <div className="flex flex-col border shadow-xl/50 rounded-xl  h-90 w-72 gap-3 bg-white border-white">
                <img
                  className="rounded-t-xl w-72 h-50"
                  src={car.image}
                  alt={car.brand}
                />
                <div className="text-xl font-medium pl-4">
                  {car.brand} {car.model}
                </div>
                <div className="flex text-[14px] font-medium pl-5">
                  <p>{car.category}</p>
                  <p>.</p>
                  <p>{car.year}</p>
                </div>
                <div className="flex justify-between  items-center pl-4">
                  <div className="flex gap-2 items-center text-[#4a5565] font-medium">
                    <img
                      className="w-4.5 h-4"
                      src="/public/person.svg"
                      alt=""
                    />
                    {car.seating_capacity} Seats
                  </div>
                  <div className="flex gap-2 items-center text-[#4a5565] font-medium pr-14">
                    <img className="w-4.5 h-4" src="/public/fuel.svg" alt="" />
                    {car.fuel_type}
                  </div>
                </div>
                <div className="flex justify-between  items-center">
                  <div className="flex gap-2 items-center text-[#4a5565] font-medium pl-4">
                    <img
                      className="w-4.5 h-4"
                      src="/public/carmodel.svg"
                      alt=""
                    />
                    <p className="f w-18 h-5 whitespace-nowrap">
                      {car.transmission}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-[#4a5565] w-32 h-5 font-medium pr-2">
                    <img className="w-4.5 h-4" src="/public/loc.svg" alt="" />
                    <p className=" w-18 h-5 whitespace-nowrap">
                      {car.location}
                    </p>
                  </div>
                </div>
                <div>
                  <button className="text-white absolute top-5 left-2  border rounded-3xl w-24 h-6 text-[12px] font-medium bg-[#2563eb] border-[#2563eb]">
                    Available Now
                  </button>
                </div>
                <div className="absolute top-36 left-44 bg-black text-white h-10 w-23.5 rounded-xl items-center flex justify-center">
                  <p>${car.pricePerDay}</p>
                  <p className="text-[#c3c5c6] font-medium">/day</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cars;
