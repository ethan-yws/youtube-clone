import React from "react";
import "./styles/VideoScene.css";
import Tagbar from "./Tagbar";
import VideoCard from "./VideoCard";

function VideoScene() {
    return (
        <div className="video-scene">
            <Tagbar />
            <div className="videos">
                <VideoCard
                    coverImage="http://i3.ytimg.com/vi/p1Co7ANo6vs/maxresdefault.jpg"
                    alt="lofi"
                    title="Waiting for dawn~Lofi hip hop mix ~[jazz Hop / lofi / chillhop mix]"
                    channel="Tunable Music"
                    views="61K"
                    timestamp="Mar 7, 2021"
                />
                <VideoCard
                    coverImage="http://i3.ytimg.com/vi/5wRWniH7rt8/maxresdefault.jpg"
                    alt="lofi"
                    title="cherry blossom. [lofi / jazzhop / chill mix]"
                    channel="Chillhop Music"
                    views="547K"
                    timestamp="Feb 1, 2021"
                />
                <VideoCard
                    coverImage="http://i3.ytimg.com/vi/QEWV6fiYaDU/maxresdefault.jpg"
                    title="dryhope - White Oak [chill hip hop beats]"
                />
                <VideoCard
                    coverImage="http://i3.ytimg.com/vi/QEWV6fiYaDU/maxresdefault.jpg"
                    title="dryhope - White Oak [chill hip hop beats]"
                />
                <VideoCard
                    coverImage="http://i3.ytimg.com/vi/QEWV6fiYaDU/maxresdefault.jpg"
                    title="dryhope - White Oak [chill hip hop beats]"
                />
            </div>
        </div>
    );
}

export default VideoScene;
