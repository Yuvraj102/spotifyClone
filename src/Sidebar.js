import "./Sidebar.css";

import React from "react";
import SidebarOption from "./SidebarOption";
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="spotify img"
      />
      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {/* playlists , optional chaining in case the playlist was empty*/}
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
