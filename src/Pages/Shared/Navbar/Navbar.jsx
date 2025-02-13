import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingBag,
  FaBox,
  FaTruck,
  FaQuestionCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(2);
  console.log(setCartCount);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-3 px-4 md:px-8 flex items-center justify-between relative">
      {/* Left Section - Categories */}
      <div className="flex items-center space-x-2">
        <button className="text-xl md:text-2xl">
          <FaBars />
        </button>
        <span className="font-bold uppercase text-lg">Categories</span>
      </div>

      {/* Middle Section - Search Box */}
      <div className="flex-1 mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search over 10,000 products"
            className="w-full md:w-96 border rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center space-x-6 relative">
        {/* User Icon with Hover Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <FaUser className="text-xl cursor-pointer" />
          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-lg z-50">
              <div className="px-4 py-2 border-b">
                <button className="bg-yellow-500 w-full text-white font-bold py-2 rounded">
                  Sign In or Sign Up
                </button>
              </div>
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FaTruck className="mr-2" /> Track your Order
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FaBox className="mr-2" /> My Orders
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FaUser className="mr-2" /> My Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 flex items-center">
                  <FaQuestionCircle className="mr-2" /> Help and FAQ
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Wishlist & Cart Icons */}
        <FaHeart className="text-xl cursor-pointer" />
        <div className="relative">
          <FaShoppingBag className="text-xl cursor-pointer" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
