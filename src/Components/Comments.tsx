const Comments = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center mt-24 mb-48 ">
      <div
        className="text-pretty text-center flex flex-col gap-2
       items-center justify-center"
      >
        <h1 className="text-4xl font-medium">What Our Customers Say</h1>
        <p className="w-80 h-15 text-[#6a7282] text-[14px]">
          Discover why discerning travelers choose StayVenture for their luxury
          accommodations around the world.
        </p>
        <div className="mt-12 gap-3 flex flex-col">
          <div className="flex outline-none flex-col gap-5 w-82 h-55 shadow-xl/50 rounded-xl">
            <div className="flex gap-2 flex-col text-start justify-start items-start ">
              <div className="flex justify-start gap-4 items-center p-4">
                <img className="w-12 h-12" src="./public/prof1.png" alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[20px]">Emma Rodriguez</p>
                  <p className="text-[16px] text-[#6a7282]">Barcelona, Spain</p>
                </div>
              </div>
              <div className="flex gap-2 pl-4">
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
              </div>
              <div>
                <p className="text-[#6a7282] text-[16px] pl-4 w-70 h-18">
                  I've rented cars from various companies, but the experience
                  with CarRental was exceptional.
                </p>
              </div>
            </div>
          </div>
          <div className="flex outline-none flex-col gap-5 w-82 h-55 shadow-xl/50 rounded-xl">
            <div className="flex gap-2 flex-col text-start justify-start items-start ">
              <div className="flex justify-start gap-4 items-center p-4">
                <img className="w-12 h-12" src="./public/prof2.png" alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[20px]">John Smith</p>
                  <p className="text-[16px] text-[#6a7282]">New York, USA</p>
                </div>
              </div>
              <div className="flex gap-2 pl-4">
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
              </div>
              <div>
                <p className="text-[#6a7282] text-[16px] pl-4 w-70 h-18 ">
                  CarRental made my trip so much easier. The car was delivered
                  right to my door, and the customer service was fantastic!
                </p>
              </div>
            </div>
          </div>
          <div className="flex outline-none flex-col gap-5 w-82 h-55 shadow-xl/50 rounded-xl">
            <div className="flex gap-2 flex-col text-start justify-start items-start ">
              <div className="flex justify-start gap-4 items-center p-4">
                <img className="w-12 h-12" src="./public/prof1.png" alt="" />
                <div className="flex flex-col justify-start items-start">
                  <p className="text-[20px]">Ava Johnson</p>
                  <p className="text-[16px] text-[#6a7282]">
                    Sydney, Australia
                  </p>
                </div>
              </div>
              <div className="flex gap-2 pl-4">
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
                <img src="./public/star.svg" alt="" />
              </div>
              <div>
                <p className="text-[#6a7282] text-[16px] pl-4 w-70 h-18">
                  I highly recommend CarRental! Their fleet is amazing, and I
                  always feel like I'm getting the best deal with excellent
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-20">
          <h1 className="text-2xl font-medium">Never Miss a Deal!</h1>
          <p className="text-[16px] text-[#6a7282] w-85.75 h-20 font-medium">
            Subscribe to get the latest offers, new arrivals, and exclusive
            discounts
          </p>
          <div className="flex overflow-hidden mx-auto  justify-around p-2 items-center border border-[#6a7282] w-85 h-12 rounded-xl">
            <input
              className="flex text-center text-[#6a7282] font-medium"
              type="text"
              placeholder="Enter your email id"
            />
            <button
              className="text-white font-medium  bg-[#2563eb] required: w-33.25 rounded-r-xl h-12"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
