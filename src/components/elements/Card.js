import React from "react";
import classNames from "classnames";

function starRating(rating) {
  let result = "";
  for (let i = 0; i < Math.floor(rating / 2); i++) {
    result =
      result + "<div className='card__star card__star_type_active'></div> ";
  }
  if (rating % 2 !== 0) {
    result =
      result + "<div className='card__star card__star_type_half'></div> ";
  }
  for (let i = 0; i < Math.floor((10 - rating) / 2); i++) {
    result = result + "<div className='card__star'></div> ";
  }
  return result;
}

function Card(props) {
  const badgeClasses = classNames("card__badge", {
    card__badge_type_action: props.action,
    "card__badge_type_action-rpg": props.actionRpg,
    "card__badge_type_card-game": props.cardGame,
    "card__badge_type_multiplayer-rpg": props.mmorpg,
    card__badge_type_shooter: props.shooter,
    card__badge_type_strategy: props.strategy,
  });

  const oldPriceClasses = classNames("card__old-price", {
    "card__old-price_active": props.oldPrice,
  });

  const SaleClasses = classNames("card__sale", {
    card__sale_active: props.oldPrice
  });

  const sale = "-" + Math.round(parseInt(props.newPrice) / parseInt(props.oldPrice) * 100) + "%";

  return (
    <article className="card">
      <a className="card__link" href="#">
        <button className="card__close"></button>
        <img className="card__image" url={props.url} />
        <p className={badgeClasses}></p>
        <h2 className="card__title">{props.children}</h2>
        <div className="card__stars">
          {starRating(props.rating)}
          <p className="card__votes">{props.votes}</p>
        </div>
        <p className="card__description">{props.description}</p>
        <div className="card__price">
          <div className="card__price-container">
            <p className={oldPriceClasses}>{"$" + props.oldPrice}</p>
            <p className="card__new-price">{"$" + props.newPrice}</p>
          </div>
          <p className={SaleClasses}>{sale}</p>
        </div>
      </a>
    </article>
  );
}

export default Card;
