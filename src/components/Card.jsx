import React from "react";

function Card(props) {
    return <div>
        <h3>{props.title}</h3>
        <img src={props.image} alt="A picture of some apples" />
        <p>{ props.description}</p>
  </div>;
}

export default Card;
