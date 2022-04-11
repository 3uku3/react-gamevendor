import React from "react";

function Breadcrumb() {
  return (
    <section className="breadcrumb">
      <ul className="breadcrumb__items">
        <li className="breadcrumb__item"><a className="breadcrumb__item-link" href="#">Home</a></li>
        <li className="breadcrumb__item"><a className="breadcrumb__item-link" href="#">Discover</a></li>
        <li className="breadcrumb__item">Games</li>
      </ul>
    </section>
  );
}

export default Breadcrumb;