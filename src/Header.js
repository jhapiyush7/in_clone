import React from "react";
import "./Header.css";
import HeaderOpt from "./HeaderOpt";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import {
  BusinessCenter,
  Chat,
  Notifications,
  SupervisorAccount,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./Firebase";
function Header() {
  const dispatch=useDispatch();
  const logOutOfApp=()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header__left">
        <img src={require("./linkedin.png")} alt="icon" />
        <div className="searchbar">
          <SearchIcon />
          <input placeholder="Search" type="text"></input>
        </div>
      </div>

      <div className="header__right">
        <HeaderOpt title="Home" Icon={HomeIcon} />
        <HeaderOpt title="My Network" Icon={SupervisorAccount} />
        <HeaderOpt title="Jobs" Icon={BusinessCenter} />
        <HeaderOpt title="Messaging" Icon={Chat} />
        <HeaderOpt title="Notifications" Icon={Notifications} />
        <HeaderOpt title="Me" avatar="abc" onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;
