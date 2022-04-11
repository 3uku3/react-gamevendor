import React from "react";

function Slider() {
  return (
  <div className="header__discounts">
    <button className="header__arrow-left"></button>
    <a className="header__text" href="#">Refer a friend and get $10 off! 🔥 Offer ends February 27!</a>
    <button className="header__arrow-right header__arrow-right_active"></button>
  </div>
  );
}

export default Slider;