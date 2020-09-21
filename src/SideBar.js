import React from "react";
import SideBarRow from "./SideBarRow";
import "./sidebar.css";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

function SideBar() {
  return (
    <div className="sidebar">
      <SideBarRow
        src={
          "https://avatars3.githubusercontent.com/u/46921146?s=460&u=97c3266ed5d5e0f46e3b1707a0ee9aefa40d6ba8&v=4"
        }
        title={"Ben Taylor"}
      />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title={"COVID-19 Information Center"}
      />
      <SideBarRow Icon={EmojiFlagIcon} title={"Pages"} />
      <SideBarRow Icon={PeopleIcon} title={"Friends"} />
      <SideBarRow Icon={ChatIcon} title={"Messenger"} />
      <SideBarRow Icon={StoreFrontIcon} title={"Marketplace"} />
      <SideBarRow Icon={VideoLibraryIcon} title={"Videos"} />
      <SideBarRow Icon={ExpandMoreOutlined} title={"Marketplace"} />
    </div>
  );
}

export default SideBar;
