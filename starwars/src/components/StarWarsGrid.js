import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

export default function StarWarsGrid({ limit }) {
    const [starWarsPic, setStarWarsPic] = useState([]);

    useEffect(() => {
        axios
            .get('https://henry-mock-swapi.herokuapp.com/api')
            .then(response =>  {
                console.log('Star Wars Character', response.data.results)
                const data = response.data.results
                setStarWarsPic(data);
            })
            .catch(error => {
                console.log('Sorry, the API is not working right now.  Try again later.', error)
            });
    }, []);

        return (
            <div className="starWars-grid">    
                {starWarsPic.map(char => 
                    <StarWarsCard key={char.name} imgUrl={char.url} />)
                }
            </div>
        );
}  