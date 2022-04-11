import React from "react";
import Card from "../elements/Card";

function Cards() {
  return (
    <section className="cards">
      <article className="add-card">
        <h2 className="add-card__text">You can add a product card by clicking on the button</h2>
        <button className="add-card__button"><img className="add-card__icon" src="/assets/icon/add.svg" alt="Add"/> Add
          card</button>
      </article>
      <Card
        url="/assets/cards/saints-row.jpg"
        actionRpg
        rating="3"
        votes="0"
        description="Platinum Edition"
        oldPrice="1,299"
        newPrice="649"
        >Saints Row</Card>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>

          <img className="card__image" src="/assets/cards/saints-row.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_action-rpg">Action RPG</p>
          <h2 className="card__title">Saints Row</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_half"></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <p className="card__votes">0</p>
          </div>
          <p className="card__description">Platinum Edition</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale card__sale_active">-50%</p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/paladins.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_multiplayer-rpg">Multiplayer RPG</p>
          <h2 className="card__title">Paladins</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star "></div>
            <p className="card__votes">1,820</p>
          </div>
          <p className="card__description">Get the Captain Price Operator included with purchase</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price"></p>
              <p className="card__new-price">Free</p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/far-cry.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_action">Action</p>
          <h2 className="card__title">Far Cry 6</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star "></div>
            <p className="card__votes">2,888</p>
          </div>
          <p className="card__description">In-Game Content</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale card__sale_active">-50%</p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/warzone.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_shooter">Shooter</p>
          <h2 className="card__title">Call of Duty: Warzone</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <p className="card__votes">18,982</p>
          </div>
          <p className="card__description">Get the Captain Price Operator included with purchase</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale card__sale_active">-50%</p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/wow.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_action">Action</p>
          <h2 className="card__title">World of Warcraft: Shadowlands</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_half"></div>
            <div className="card__star "></div>
            <p className="card__votes">299</p>
          </div>
          <p className="card__description">Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!
          </p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price "></p>
              <p className="card__new-price">Free</p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/fortnite.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_shooter">Shooter</p>
          <h2 className="card__title">Fortnite</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_half"></div>
            <p className="card__votes"></p>
          </div>
          <p className="card__description">Get the Captain Price Operator included with purchase</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale card__sale_active">-50%</p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/horizon.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_action-rpg">Action RPG</p>
          <h2 className="card__title">Horizon: Forbidden West</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_half"></div>
            <p className="card__votes">9,199</p>
          </div>
          <p className="card__description">Platinum Edition</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/nfs.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_action">Action</p>
          <h2 className="card__title">Need for Speed: Heat</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_half"></div>
            <p className="card__votes">2,911</p>
          </div>
          <p className="card__description">Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!
          </p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price"></p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/spider-man-miles-morales.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_action">Action</p>
          <h2 className="card__title">Spider-Man: Miles Morales</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <p className="card__votes">920</p>
          </div>
          <p className="card__description">Get the Captain Price Operator included with purchase</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale card__sale_active">-50%</p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/witcher.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_card-game">Card Game</p>
          <h2 className="card__title">Witcher 3: Wild Hunt</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <p className="card__votes">299,890</p>
          </div>
          <p className="card__description">Will only be usable in the new Classic Format when it is released</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/guardians-of-the-galaxy.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_shooter">Shooter</p>
          <h2 className="card__title">Guardians of the Galaxy</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <p className="card__votes">29</p>
          </div>
          <p className="card__description">In-Game Content</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale card__sale_active">-50%</p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/crash-team-racing.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_shooter">Shooter</p>
          <h2 className="card__title">Crash Team Racing</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_half"></div>
            <p className="card__votes">9,199</p>
          </div>
          <p className="card__description">Get the Captain Price Operator included with purchase</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price card__old-price_active">$1,299</p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale card__sale_active">-50%</p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/spider-man.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_multiplayer-rpg">Multiplayer RPG</p>
          <h2 className="card__title">Spider-Man</h2>
          <div className="card__stars">
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_active"></div>
            <div className="card__star card__star_type_half"></div>
            <p className="card__votes">9,199</p>
          </div>
          <p className="card__description">Includes access to World of Warcraft, Burning Crusade Classic, and WoW Classic!
          </p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price"></p>
              <p className="card__new-price">$649</p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
      <article className="card">
        <a className="card__link" href="#">
          <button className="card__close"></button>
          <img className="card__image" src="/assets/cards/not-img.jpg" alt="Card image"/>
          <p className="card__badge card__badge_type_action-rpg">Action RPG</p>
          <h2 className="card__title">Dragon Age 5</h2>
          <div className="card__stars">
            <div className="card__star "></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <div className="card__star "></div>
            <p className="card__votes">0</p>
          </div>
          <p className="card__description">Non released</p>
          <div className="card__price">
            <div className="card__price-container">
              <p className="card__old-price"></p>
              <p className="card__new-price"></p>
            </div>
            <p className="card__sale"></p>
          </div>
        </a>
      </article>
    </section>
  )
}

export default Cards;