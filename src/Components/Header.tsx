import { useState } from "react";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <header className="bg-[#f1f4f9] p-4 flex items-center justify-between border-b border-[#c4c7d2] sm:flex sm:justify-around sm:items-center">
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>

        <div className="hidden sm:flex">
          <ul className="flex gap-5 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cars">Cars</Link>
            </li>

            <li>
              <Link to="/my-bookings">MyBookings</Link>
            </li>

            <li className="border border-[#cfd2d7] w-56 rounded-xl flex items-center p-2">
              <input
                className="w-full outline-none"
                type="text"
                placeholder="search cars"
              />
              <CiSearch />
            </li>

            <li>
              <Link to="/listcars">List cars</Link>
            </li>

            <li>
              <button
                onClick={() => {
                  setIsSignup(false);
                  setShowLogin(true);
                }}
                className="bg-[#2563eb] text-white w-28 h-10 rounded-xl"
              >
                Login
              </button>
            </li>
          </ul>
        </div>

        <button className="sm:hidden" onClick={handleMenu}>
          <img src="/Menu.svg" alt="Menu" />
        </button>
      </header>

      {showMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col ">
          <div className="flex justify-between items-center p-4 border-b border-[#c4c7d2] bg-[#f1f4f9]">
            <img src="/logo.svg" alt="Logo" />

            <button onClick={handleMenu} className="text-4xl">
              ×
            </button>
          </div>
          <ul className="flex flex-col h-full bg-[#f1f4f9]  gap-8 p-5">
            <li>
              <Link to="/" onClick={handleMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/cars" onClick={handleMenu}>
                Cars
              </Link>
            </li>

            <li>
              <Link to="/my-bookings" onClick={handleMenu}>
                MyBookings
              </Link>
            </li>

            <li>
              <Link to="/listcars" onClick={handleMenu}>
                List cars
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowMenu(false);
                  setIsSignup(false);
                  setShowLogin(true);
                }}
                className="bg-[#2563eb] text-white w-28 h-10 rounded-xl"
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      )}
      {showLogin && (
        <div
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-999"
          onClick={() => {
            setShowLogin(false);
            setIsSignup(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-80 rounded-2xl p-6 relative"
          >
            <button
              onClick={() => {
                setShowLogin(false);
                setIsSignup(false);
              }}
              className="absolute top-3 right-4 text-2xl"
            ></button>
            <h1 className="text-center text-3xl font-semibold mb-6">
              <span className="text-[#2563eb]">User </span>
              {isSignup ? "Sign Up" : "Login"}
            </h1>
            <div className="flex flex-col gap-4">
              {isSignup && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-[#4a5565]">Name</label>
                  <input
                    className="border border-[#ebe6e7] rounded-xl p-3"
                    type="text"
                    placeholder="type here"
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#4a5565]">Email</label>

                <input
                  className="border border-[#ebe6e7] rounded-xl p-3"
                  type="email"
                  placeholder="type here"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-[#4a5565]">Password</label>

                <input
                  className="border border-[#ebe6e7] rounded-xl p-3"
                  type="password"
                  placeholder="type here"
                />
              </div>

              {!isSignup ? (
                <p className="text-sm text-[#4a5565]">
                  Create an account?
                  <span
                    onClick={() => setIsSignup(true)}
                    className="text-[#2563eb] cursor-pointer"
                  >
                    Click here
                  </span>
                </p>
              ) : (
                <p className="text-sm text-[#4a5565]">
                  Already have account?
                  <span
                    onClick={() => setIsSignup(false)}
                    className="text-[#2563eb] cursor-pointer"
                  >
                    Click here
                  </span>
                </p>
              )}

              <button className="bg-[#2563eb] text-white rounded-xl h-11">
                {isSignup ? "Create Account" : "Login"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
