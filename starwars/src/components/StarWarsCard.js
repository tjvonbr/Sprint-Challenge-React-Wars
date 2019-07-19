import React from "react";

export default function StarWarsCard({ name, imgUrl }) {
    return (
        <div className="starWars-card">
            <img key={name} src={imgUrl} alt="Star Wars Card" />
        </div>
    );
}