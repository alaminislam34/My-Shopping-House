import { FaPhoneAlt } from "react-icons/fa";

const NavTop = () => {
  return (
    <nav className="bg-blue-600 text-white text-xs md:text-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto py-2 px-4">
        {/* Logo */}
        <div className="text-lg lg:text-xl font-bold flex items-center">
          <span className="text-xl lg:text-2xl">A</span>llaia
        </div>

        {/* Contact Info */}
        <div className="flex items-center space-x-2 text-xs md:text-sm">
          <FaPhoneAlt />
          <span>+880 182 185 8917</span>
        </div>
      </div>
    </nav>
  );
};

export default NavTop;
