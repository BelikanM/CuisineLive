import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineFire,
  AiOutlineHeart,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { MdAddBox } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    { to: "/home", icon: <AiFillHome size={24} />, label: "Accueil" },
    { to: "/search", icon: <AiOutlineSearch size={24} />, label: "Rechercher" },
    { to: "/add", icon: <MdAddBox size={32} />, label: "" }, // Plus gros bouton centré
    { to: "/trending", icon: <AiOutlineFire size={24} />, label: "Tendance" },
    { to: "/friends", icon: <AiOutlineUsergroupAdd size={24} />, label: "Amis" },
  ];

  return (
    <nav className="navbar fixed-bottom navbar-light bg-white border-top shadow-lg p-0">
      <div className="container-fluid d-flex justify-content-around align-items-center">
        {links.map(({ to, icon, label }, index) => (
          <NavLink
            key={index}
            to={to}
            className={({ isActive }) =>
              `text-center nav-link d-flex flex-column align-items-center ${
                isActive ? "text-success fw-bold" : "text-secondary"
              }`
            }
            style={{ flex: index === 2 ? "0 0 70px" : "1" }}
          >
            {icon}
            {label && <small className="mt-1">{label}</small>}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
