import React from "react";
import "./styles/Tag.css";

function Tag({ selected, title }) {
    return (
        <div className={`tag ${selected && "selected"}`}>
            <button className="tag__title">{title}</button>
        </div>
    );
}

export default Tag;
