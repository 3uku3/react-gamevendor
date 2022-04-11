import React from "react";

function Discount() {
  return (
    <section className="discount">
      <div className="discount__container">
        <h2 className="discount__title">
          Refer a friends and get $10 off!
        </h2>
        <p className="discount__text">
          Connect with friends. Refer a friend and unlock your $10 coupon! Offer ends February 27.
        </p>
        <button className="discount__button">Invite a friend</button>
        <img className="discount__image" src="/assets/characters.png" alt="Characters" />
      </div>
    </section>
  );
}

export default Discount;