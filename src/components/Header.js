import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import "./styles/Header.css";

function Header() {
    return (
        <div className="header-bar">
            
            <div className="header-left">
                <MenuIcon />
                <img className="youtube-icon" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" />
            </div>
            
            
            <div className="user-input">
                <input type="text" placeholder="Search.." name="search"></input>
                <SearchIcon className="search-icon" />
            </div>

            <div className="icons-right">
                <VideoCallIcon className="icon-right" />
                <AppsIcon className="icon-right" />
                <NotificationsIcon className="icon-right" />
                <AccountCircleIcon className="icon-right" />
            </div>
            
        </div>
    )
}

export default Header
