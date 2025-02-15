import { useState, useRef, useEffect } from "react";
import {
  FaSearch,
  FaBox,
  FaUser,
  FaTruck,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RiMenuFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  // Reference for detecting outside click
  const userRef = useRef(null);
  const cartRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserDropdown(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-white shadow-md transition-transform duration-500 ${
        sticky ? "fixed top-0 left-0 w-full z-50" : "relative"
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3">
        {/* Left - Menu Icon */}
        <div className="flex items-center space-x-2 ">
          <button onClick={() => setIsDrawerOpen(true)}>
            <RiMenuFill className="text-2xl cursor-pointer" />
          </button>
          <span className="font-semibold hidden lg:inline">CATEGORIES</span>
        </div>
        {/* Sidebar Drawer */}
        <div
          className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4">
            <button
              className="text-lg font-semibold cursor-pointer w-full flex justify-end"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✖
            </button>
            <ul className="mt-4 space-y-2">
              <li
                onClick={() => setIsDrawerOpen(false)}
                className="hover:bg-gray-200 cursor-pointer"
              >
                <Link className="inline-block w-full p-2" to="/">
                  Home
                </Link>
              </li>
              <li
                onClick={() => setIsDrawerOpen(false)}
                className="hover:bg-gray-200 cursor-pointer"
              >
                <Link className="inline-block w-full p-2" to="/products">
                  Products
                </Link>
              </li>
              <li
                onClick={() => setIsDrawerOpen(false)}
                className="hover:bg-gray-200 cursor-pointer"
              >
                <Link className="inline-block w-full p-2" to="/about">
                  About
                </Link>
              </li>
              <li
                onClick={() => setIsDrawerOpen(false)}
                className="hover:bg-gray-200 cursor-pointer"
              >
                <Link className="inline-block w-full p-2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle - Search Box */}
        <div className="hidden md:flex relative flex-grow md:flex-grow-0 max-w-lg w-full">
          <input
            type="text"
            placeholder="Search over 10,000 products"
            className="w-full border rounded-md px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4 mr-2">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden"
          >
            <GoSearch className="text-2xl" />
          </button>

          {/* User Dropdown */}
          <div className="relative flex items-center" ref={userRef}>
            <button
              onClick={() => setUserDropdown(!userDropdown)}
              className="cursor-pointer"
            >
              <FaRegCircleUser className="text-2xl" />
            </button>
            {userDropdown && (
              <div className="absolute -right-12 top-6 mt-2 w-56 bg-white shadow-lg rounded-md p-2 border z-10">
                <button
                  onClick={() => {
                    navigate("/signin"), setUserDropdown(false);
                  }}
                  className="w-full bg-yellow-400 text-black font-semibold py-2 rounded-md cursor-pointer"
                >
                  Sign In or Sign Up
                </button>
                <ul className="mt-2">
                  <li
                    onClick={() => setUserDropdown(false)}
                    className=" hover:bg-gray-100 cursor-pointer"
                  >
                    <Link className="flex items-center px-4 py-2">
                      <FaTruck className="mr-2" /> Track your Order
                    </Link>
                  </li>
                  <li
                    onClick={() => setUserDropdown(false)}
                    className=" hover:bg-gray-100 cursor-pointer"
                  >
                    <Link className="flex items-center px-4 py-2">
                      <FaBox className="mr-2" /> My Orders
                    </Link>
                  </li>
                  <li
                    onClick={() => setUserDropdown(false)}
                    className=" hover:bg-gray-100 cursor-pointer"
                  >
                    <Link className="flex items-center px-4 py-2">
                      {" "}
                      <FaUser className="mr-2" /> My Profile
                    </Link>
                  </li>
                  <li
                    onClick={() => setUserDropdown(false)}
                    className=" hover:bg-gray-100 cursor-pointer"
                  >
                    <Link className="flex items-center px-4 py-2">
                      {" "}
                      <FaQuestionCircle className="mr-2" /> Help and FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <button className="cursor-pointer">
            <FiHeart className="text-2xl" />
          </button>

          {/* Cart Dropdown */}
          <div className="relative flex items-center" ref={cartRef}>
            <button
              onClick={() => setCartDropdown(!cartDropdown)}
              className="relative cursor-pointer"
            >
              <HiOutlineShoppingBag className="text-2xl" />
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </button>
            {cartDropdown && (
              <div className="absolute right-0 top-6 mt-2 w-64 bg-white shadow-lg rounded-md p-3 border z-10">
                <p className="text-gray-700 text-center">Your Cart is Empty</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Search Dropdown */}
      {searchOpen && (
        <div className="w-full p-2 md:hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search over 10,000 products"
              className="w-full border rounded-md px-4 py-2 pr-10 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
