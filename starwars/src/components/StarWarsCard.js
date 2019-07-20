import React from "react";
import { Card, Icon } from 'semantic-ui-react'
import styled from 'styled-components';
import '../index.css';

export default function StarWarsCard(props) {
    return (
        <div className="card-container">
          <Card.Content>
            <h6 className="char-name">{props.char.name}</h6>
            <div className="birthday">
              <span className="date">Born {props.char.birth_year}</span>
            </div>
            <div className="descrip-container">
              <p className="description">{props.char.name} is a {props.char.gender}.</p>
            </div>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              {props.char.mass} Friends
            </a>
          </Card.Content>
        </div>
    );
}