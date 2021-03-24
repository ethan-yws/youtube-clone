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
                    title="Waiting for dawn~Lofi hip hop mix ~[jazz Hop / lofi / chillhop mix]"
                />
                <VideoCard
                    coverImage="http://i3.ytimg.com/vi/5wRWniH7rt8/maxresdefault.jpg"
                    title="cherry blossom. [lofi / jazzhop / chill mix]"
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
