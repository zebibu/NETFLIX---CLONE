import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import logo from "../../assets/Images/Netflix-Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src={logo} alt="Netflix Logo" className="logo-img" />
      </Link>

      {/* Navigation Menu */}
      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/tv" className="nav-link">
          TV Shows
        </Link>
        <Link to="/movies" className="nav-link">
          Movies
        </Link>
        <Link to="/new" className="nav-link">
          New & Popular
        </Link>
        <Link to="/mylist" className="nav-link">
          My List
        </Link>
        <Link to="/languages" className="nav-link">
          Browse by Languages
        </Link>
      </nav>

      {/* Right-side Icons */}
      <div className="header-icons">
        <Link to="/search">
          <SearchIcon style={{ color: "white" }} />
        </Link>
        <Link to="/kids" className="kids">
          Kids
        </Link>{" "}
        {/* Kids link, styled without underline */}
        <Link to="/notifications">
          <NotificationsIcon style={{ color: "white" }} />
        </Link>
        <Link to="/account">
          <AccountCircleIcon style={{ color: "white" }} />
        </Link>
        <Link to="/settings">
          <ArrowDropDownIcon style={{ color: "white" }} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
