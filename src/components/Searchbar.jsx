import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { links } from "../assets/constants";
import logo from "../assets/logo.png";

function NavLinks({ handleClick }) {
  return (
    <div className="lg:flex hidden flex-row">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className="flex flex-row justify-center items-center my-8 text-sm font-medium text-gray-400 hover:text-white w-36"
          onClick={() => handleClick && handleClick()}
          end
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/musict/search/${searchTerm}`);
  };

  return (
    <div className="flex flex-row h-8 w-full justify-start items-center m-4 mt-6 ml-6">
      <img
        src={logo}
        alt="logo"
        className="h-8 w-8 object-contain mr-[0.5rem]"
      />
      <form
        onSubmit={handleSubmit}
        autoComplete
        className=" lg:w-[35rem] w-[20rem] text-gray-400 focus-within:text-gray-600"
      >
        <label htmlFor="search-field" className="sr-only">
          Search all files
        </label>
        <div className="flex flex-row justify-start items-center">
          <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
          <input
            name="search-field"
            autoComplete
            id="search-field"
            className="flex border-[1px] bg-transparent border-solid border-neutral-700 rounded-[10rem] h-8 ml-4 w-[30rem] placeholder-gray-400 outline-none text-base text-white p-4"
            placeholder="Search"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>

      <NavLinks />
    </div>
  );
};

export default Searchbar;
