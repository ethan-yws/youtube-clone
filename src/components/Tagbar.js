import React from "react";
import "./styles/Tagbar.css";
import Tag from "./Tag";

function Tagbar() {
    return (
        <div className="tagbar">
            <Tag title="All" />
            <Tag title="News" />
            <Tag title="Tech" />
            <Tag title="Sports" />
            <Tag title="Music" />
            <Tag title="Fashion" />
            <Tag title="COVID-19" />
            <Tag title="US" />
            <Tag title="UK" />
            <Tag title="Aisa" />
            <Tag title="Cats" />
            <Tag title="Lo-fi music" />
            <Tag title="React.js" />
        </div>
    );
}

export default Tagbar;
