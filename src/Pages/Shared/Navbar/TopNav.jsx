import { FaPhoneAlt } from "react-icons/fa";

const NavTop = () => {
  return (
    <nav className="bg-blue-600 text-white text-xs md:text-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="text-3xl">A</span>llaia
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-2">
          <FaPhoneAlt />
          <span>+880 182 185 8917</span>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
