import { useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from "react-router";
import type { ICarData } from "./Cars";
import { useParams } from "react-router";

const CarDetails = () => {
  const [cars, setCars] = useState<ICarData[]>([]);
  const { id } = useParams();

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
      <div>
        <div className="flex flex-col justify-center items-center pt-8 gap-6 ">
          {cars
            .filter((item) => item._id === id)
            .map((car) => (
              <div
                className="flex flex-col justify-center mb-60 items-start  relative"
                key={car._id}
              >
                <div className="flex flex-col justify-center items-start pl-4 text-start gap-4">
                  <img
                    className="rounded-t-xl w-82 h-102.5 rounded-xl"
                    src={car.image}
                    alt={car.brand}
                  />
                  <div className="text-[30px] font-bold">
                    {car.brand} {car.model}
                  </div>
                  <div className="flex text-[18px] text-[#6a7282] font-medium">
                    <p>{car.category}</p>
                    <p>.</p>
                    <p>{car.year}</p>
                  </div>
                  <div className="border-b h-1 w-85 border-[#c4c7d2]"></div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className=" flex flex-col bg-[#f1f5f9] justify-center items-center gap-2 w-39 h-21 rounded-xl">
                      <img
                        className="w-4.5 h-4"
                        src="/public/person.svg"
                        alt=""
                      />
                      <p className="text-[16px] font-medium">
                        {car.seating_capacity} Seats
                      </p>
                    </div>
                    <div className="flex flex-col bg-[#f1f5f9] justify-center items-center gap-2 w-39 h-21 rounded-xl">
                      <img
                        className="w-4.5 h-4"
                        src="/public/fuel.svg"
                        alt=""
                      />
                      <p className="text-[16px] font-medium">{car.fuel_type}</p>
                    </div>
                    <div className="flex flex-col bg-[#f1f5f9] justify-center items-center gap-2 w-39 h-21 rounded-xl">
                      <img
                        className="w-4.5 h-4"
                        src="/public/carmodel.svg"
                        alt=""
                      />
                      <p className="text-[16px] font-medium">
                        {car.transmission}
                      </p>
                    </div>
                    <div className="flex flex-col bg-[#f1f5f9] justify-center items-center gap-2 w-39 h-21 rounded-xl">
                      <img className="w-4.5 h-4" src="/public/loc.svg" alt="" />
                      <p className=" text-[16px] font-medium">{car.location}</p>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-[20px] font-bold ">Description</h1>
                    <p className="w-81.75 h-24 text-[#6a7282] font-medium">
                      {car.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[20px] font-bold">Features</h1>
                    <ul className="flex flex-col gap-3">
                      <li className="flex gap-2">
                        <img src="/public/Tick.svg" alt="" />
                        <p className="text-[#6a7282] text-[16px] font-medium">
                          360 Camera
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <img src="/public/Tick.svg" alt="" />
                        <p className="text-[#6a7282] text-[16px] font-medium">
                          Bluetooth
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <img src="/public/Tick.svg" alt="" />
                        <p className="text-[#6a7282] text-[16px] font-medium">
                          GPS
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <img src="/public/Tick.svg" alt="" />
                        <p className="text-[#6a7282] text-[16px] font-medium">
                          Heated Seats
                        </p>
                      </li>
                      <li className="flex gap-2">
                        <img src="/public/Tick.svg" alt="" />
                        <p className="text-[#6a7282] text-[16px] font-medium">
                          Rear View Mirror
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col  items-start  gap-2 w-76 h-98 rounded-xl shadow-xl/25 ml-4 mt-4">
                    <div className="p-5 rounded-xl items-center flex gap-40 ">
                      <p className="text-[#1e2939] text-[24px] font-bold">
                        ${car.pricePerDay}
                      </p>
                      <p className="text-[#c3c5c6] font-medium text-pretty w-13.75 h-6">
                        per day
                      </p>
                    </div>
                    <div className="border-b w-70 h-2 border-[#c4c7d2]"></div>
                    <div className="flex flex-col gap-3 p-2  ">
                      <label className="font-medium" htmlFor="">
                        Pick-up Date
                      </label>
                      <div className="flex border p-2 w-70 h-10.5 border-[#c4c7d2] rounded-xl">
                        <input className="text-[#6a7282] w-full" type="date" />
                      </div>
                      <label className="font-medium" htmlFor="">
                        Return Date
                      </label>
                      <div className="flex  w-full p-2 border border-[#c4c7d2] rounded-xl">
                        <input className="text-[#6a7282] w-full" type="date" />
                      </div>
                    </div>
                    <div className="flex justify-center items-center ml-2">
                      <button className="bg-[#2563eb] font-bold text-white w-70 h-12 rounded-xl justify-center items-center">
                        Book Now
                      </button>
                    </div>
                    <div className="ml-10 mt-3 text-center">
                      <p className="text-center text-[14px] text-[#6a7282]">
                        No credit card required to reserve
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CarDetails;
