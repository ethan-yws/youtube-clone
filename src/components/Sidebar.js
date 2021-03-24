import React from "react";
import "./styles/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import MovieIcon from "@material-ui/icons/Movie";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SidebarRow from "./SidebarRow";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={ExploreIcon} title="Explore" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={MovieIcon} title="Your videos" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch later" />
            <SidebarRow Icon={ThumbUpAltIcon} title="Liked videos" />
            <hr />
            <p className="subs__title">SUBSCRIPTIONS</p>
        </div>
    );
}

export default Sidebar;
