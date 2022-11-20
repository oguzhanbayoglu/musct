import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

function NavLinks({ handleClick }) {
  return (
    <div className="mt-10 ">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className="flex flex-row justify-center items-center my-8 text-sm font-medium text-gray-400 hover:text-white"
          onClick={() => handleClick && handleClick()}
          end
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* <div className="lg:flex hidden flex-col w-[160px] py-10 px-4 bg-[#191919]">
        <div className="flex items-center justify-center ">
          <img
            src={logo}
            alt="logo"
            className="h-8 w-8 object-contain mr-[0.5rem]"
          />
          <h2 className="text-2xl font-[700] text-white mb-[0.1rem]">Musict</h2>
        </div>
        <NavLinks />
      </div> */}

      <div className="absolute lg:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            onClick={() => setMobileMenuOpen(false)}
            className="w-6 h-6 text-white mr-2"
          />
        ) : (
          <HiOutlineMenu
            onClick={() => setMobileMenuOpen(true)}
            className="w-6 h-6 text-white mr-2"
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to from-white/10 to-[#191919] backdrop-blur-xl z-10 p-6 lg:hidden smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex items-center justify-center ">
          <img src={logo} alt="logo" className="h-8 w-8 object-contain mr-3" />
          <h2 className="text-2xl text-white mb-[0.1rem]">Musict</h2>
        </div>
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
