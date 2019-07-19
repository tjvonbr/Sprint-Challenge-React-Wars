import React from "react";

export default function StarWarsCard(props) {
    console.log(props);
    return (
        <div className="starWars-card">
            <img src={props.url} alt="Star Wars Card" />
            <p>{props.birthyear}</p>
        </div>
    );
}