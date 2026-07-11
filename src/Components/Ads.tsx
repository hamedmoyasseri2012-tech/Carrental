const Ads = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col gap-4 text-white bg-linear-to-r rounded-xl w-83 pt-8 pl-3 h-123 justify-start items-start from-[#246cff] to-[#a7cdfe] mt-12">
        <h1 className="text-[30px]">Do You Own a Luxury Car?</h1>
        <p className="w-71.75 h-12">
          Monetize your vehicle effortlessly by listing it on CarRental.
        </p>
        <p className="w-71.75 h-12 mb-10">
          We take care of insurance, driver verification and secure payments —
          so you can earn passive income, stress-free.
        </p>
        <button className="border w-31 h-9 p-2 rounded-[5px] text-[14px] font-medium flex items-center justify-center bg-white text-[#2563eb] border-[#246cff]">
          List your car
        </button>
        <img className="w-71.75 h-34.5" src="./public/car2.png" alt="" />
      </div>
    </div>
  );
};

export default Ads;
