import React from "react";

function Show() {
  return (
    <section className="show">
      <button className="show__button">Show more</button>
      <ul className="show__items">
        <li className="show__item"><button className="show__arrow-left"></button></li>
        <li className="show__item"><button className="show__item-button show__item-button_active">1</button></li>
        <li className="show__item"><button className="show__item-button">2</button></li>
        <li className="show__item"><button className="show__item-button">3</button></li>
        <li className="show__item"><button className="show__item-button">4</button></li>
        <li className="show__item"><button className="show__item-button">5</button></li>
        <li className="show__item">...</li>
        <li className="show__item"><button className="show__item-button">99</button></li>
        <li className="show__item"><button className="show__arrow-right show__arrow-right_active"></button></li>
      </ul>
    </section>
  )
}

export default Show;