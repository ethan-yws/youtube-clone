import React from "react";
import "./styles/VideoCard.css";

function VideoCard({ coverImage, avatar, title, channel, views, timestamp }) {
    return (
        <div className="videoCard">
            <img src={coverImage} width="320" height="180" />
            <p className="video__title">{title}</p>
        </div>
    );
}

export default VideoCard;
