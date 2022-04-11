import React from "react";

function TemplateCard() {
  return (
    <template id="template-card">
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" />
          <p className="card__badge"></p>
          <h2 className="card__title"></h2>
          <div className="card__stars">
            <div className="card__star"></div>
            <div className="card__star"></div>
            <div className="card__star"></div>
            <div className="card__star"></div>
            <div className="card__star"></div>
            <p className="card__votes">0</p>
          </div>
          <p className="card__description"></p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price"></p>
              <p className="card__new-price"></p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
    </template>
  );
}

export default TemplateCard;
