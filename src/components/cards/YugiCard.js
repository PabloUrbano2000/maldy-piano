import React from "react";

export default function YugiCard({ name, img }) {
  return (
    <div className="card animate__animated animate__fadeIn">
      <div className="card-body">
        <img src={img} alt={name}></img>
        <p>{name}</p>
      </div>
    </div>
  );
}
