import React from "react";

const styleDiv ={
  display: "inline-block",
  margin: 10
}

const styleImage = {
  height: 200,
  width: 150
}

const Cards = props => {


  return (
    <div className="card-deck" style={styleDiv}>
  <div className="card">
    <img src={props.image} class="card-img-top" alt={props.name} data-index={props.id} onClick={props.function} style= {styleImage} ></img>
  </div>
</div>
  );
};

export default Cards;

