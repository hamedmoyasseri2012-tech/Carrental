import { CiSearch } from "react-icons/ci";
import { useSelectCar } from "../Store/useSelectCar";

const Banner = () => {
  // const [value, setValue] = useState("");

  const { selectCar, setSelectCar } = useSelectCar();

  console.log(selectCar);

  return (
    <div className="bg-[#f1f4f9] flex flex-col justify-center items-center gap-10 pt-8">
      <h1 className="text-4xl font-bold">Luxury cars on Rent</h1>
      <div className="bg-white flex flex-col w-74 h-80.5 p-4 gap-3 justify-start text-start items-start">
        <div className="sm:flex">
          <div className="flex flex-col w-fit justify-center items-center">
            <select
              value={selectCar}
              onChange={(e) => setSelectCar(e.target.value)}
              className="border border-white outline-none font-medium items-start text-start"
              name=""
              id="city"
            >
              <option className="font-medium" value="">
                Pickup Location
              </option>
              <option
                className="text-[#6a7282] text-xs font-light"
                value="New York"
              >
                New York
              </option>
              <option
                className="text-[#6a7282] text-xs font-light"
                value="Los Angeles"
              >
                Los Angeles
              </option>
              <option
                className="text-[#6a7282] text-xs font-light"
                value="Houston"
              >
                Houston
              </option>
              <option
                className="text-[#6a7282] text-xs font-light"
                value="Chicago"
              >
                Chicago
              </option>
            </select>
            <p className="text-[#6a7282]" id="city">
              {selectCar ? selectCar : "Please select location"}
            </p>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <label className="font-medium" htmlFor="">
              Pick-up Date
            </label>
            <input className="text-[#6a7282]" type="date" />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <label className="font-medium" htmlFor="">
              Return Date
            </label>
            <input className="text-[#6a7282]" type="date" />
          </div>
        </div>
        <button className="flex items-center gap-3 bg-[#2563eb] w-37 h-12 justify-center rounded-3xl">
          <i className="text-white text-xl">
            <CiSearch />
          </i>
          <p className=" text-white font-medium">Search</p>
        </button>
      </div>
      <img src="./public/car1.png" alt="" />
    </div>
  );
};

export default Banner;
