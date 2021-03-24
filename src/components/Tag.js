import React from "react";
import "./styles/Tag.css";

function Tag({ title }) {
    return (
        <div className="tag">
            <button className="tag__title">{title}</button>
        </div>
    );
}

export default Tag;
