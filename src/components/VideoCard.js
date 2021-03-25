import React from "react";
import "./styles/VideoCard.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function VideoCard({ coverImage, alt, title, channel, views, timestamp }) {
    return (
        <div className="videoCard">
            <img src={coverImage} alt={alt} width="320" height="180" />
            <div className="channel__info">
                <AccountCircleIcon
                    style={{ fontSize: 36 }}
                    className="channel__icon"
                />
                <div className="text__info">
                    <h4 className="video__title">{title}</h4>
                    <p className="channel__name">{channel}</p>
                    <p className="views__timestamp">{`${views} views • ${timestamp}`}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
