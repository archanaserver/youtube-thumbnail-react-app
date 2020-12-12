import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/*Youtube logo */}
      <div className="header__leftSide">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_Youtube-512.png"
          alt=""
        />
      </div>
      {/* Search box in mid */}
      <div className="header__search">
        <TextField
          className="header__input"
          placeholder="Search"
          variant="outlined"
        />
        <Button className="header__searchButton" variant="outlined">
          <SearchIcon />
        </Button>
      </div>
      {/* right side logo's */}
      <div className="header__rightSide">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
      </div>
    </div>
  );
}

export default Header;
