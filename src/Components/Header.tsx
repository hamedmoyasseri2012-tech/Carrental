import { useState } from "react";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-[#f1f4f9] p-4 flex items-center justify-between border-b border-[#c4c7d2] sm:flex sm:justify-around sm:items-center">
        <Link to="/">
          <img className="text-xl" src="/logo.svg" alt="Logo" />
        </Link>

        <div className="hidden sm:flex">
          <ul className="sm:flex sm:flex-row sm:gap-5 sm:items-center ">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/cars">Cars</Link>
            </li>

            <li>
              <Link to="/my-bookings">MyBookings</Link>
            </li>
            <li className="border border-[#cfd2d7] w-56 rounded-xl flex h-8.5 items-center p-2">
              <input
                className="text-[#93969c]"
                type="text"
                placeholder="search cars"
              />
              <CiSearch />
            </li>
            <li>
              <Link to="/listcars">List cars</Link>
            </li>
            <li>
              <button className="bg-[#2563eb] text-white w-26 h-10 rounded-xl">
                Login
              </button>
            </li>
          </ul>
        </div>
        <button className="sm:hidden" onClick={handleMenu}>
          <img src="/Menu.svg" alt="Menu" />
        </button>
      </header>

      {/* Full Screen Menu */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          {/* Top */}
          <div className="flex justify-between  bg-[#f1f5f9] items-center p-4 border-b border-[#c4c7d2]">
            <img src="/logo.svg" alt="Logo" />

            <button onClick={handleMenu} className="text-4xl font-bold">
              ×
            </button>
          </div>

          {/* Menu */}
          <ul className="flex-1 flex flex-col gap-8 p-2 bg-[#f1f4f9] font-medium text-[#4a5565] ">
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
                list cars
              </Link>
            </li>
            <Link to = "login">
              <button className="bg-[#2563eb] text-white w-26 h-10 rounded-xl">
                Login
              </button>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
