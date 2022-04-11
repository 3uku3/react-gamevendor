import React from "react";

function Popup() {
  return(
    <div className="popup">
    <form className="popup__container" name="popup-add">
      <button className="popup__close-button" type="button"><img className="popup__close-image"
          src="/assets/icon/close-popup.svg" alt="close"/></button>
      <h2 className="popup__title">New card</h2>
      <div className="popup__radio">
        <div>
          <input className="popup__radio-item" type="radio" id="shooter" name="badge" value="Shooter" checked/>
          <label for="shooter">Shooter</label>
        </div>
        <div>
          <input className="popup__radio-item" type="radio" id="multiplayer-rpg" name="badge" value="Multiplayer RPG"/>
          <label for="multiplayer-rpg">Multiplayer RPG</label>
        </div>
        <div>
          <input className="popup__radio-item" type="radio" id="action" name="badge" value="Action"/>
          <label for="action">Action</label>
        </div>
        <div>
          <input className="popup__radio-item" type="radio" id="card-game" name="badge" value="Card Game"/>
          <label for="card-game">Card Game</label>
        </div>
        <div>
          <input className="popup__radio-item" type="radio" id="strategy" name="badge" value="Strategy"/>
          <label for="strategy">Strategy</label>
        </div>
        <div>
          <input className="popup__radio-item" type="radio" id="action-rpg" name="badge" value="Action RPG"/>
          <label for="action-rpg">Action RPG</label>
        </div>

      </div>
      <input className="popup__input-text popup__input-text_type_name" placeholder="Name" name="name" type="text"/>
      <input className="popup__input-text popup__input-text_type_link" placeholder="Image link" name="link-img" type="text"/>
      <input className="popup__input-text popup__input-text_type_description" placeholder="Description" name="description" type="text"/>
      <input className="popup__input-text popup__input-text_type_old-price" placeholder="Old price" name="description" type="text"/>
      <input className="popup__input-text popup__input-text_type_new-price" placeholder="New price" name="new-price" type="text"/>
      <div className="popup__rating">
        <div className="popup__stars">
          <div className="popup__star"></div>
          <div className="popup__star"></div>
          <div className="popup__star"></div>
          <div className="popup__star"></div>
          <div className="popup__star"></div>
          <div className="popup__rating-radio">
            <input className="popup__rating-item" type="radio" id="rating-0" name="rating" value="0" checked/>
            <label className="popup__rating-label" for="rating-0"></label>
            <input className="popup__rating-item" type="radio" id="rating-1" name="rating" value="1"/>
            <label className="popup__rating-label" for="rating-1"></label>
            <input className="popup__rating-item" type="radio" id="rating-2" name="rating" value="2"/>
            <label className="popup__rating-label" for="rating-2"></label>
            <input className="popup__rating-item" type="radio" id="rating-3" name="rating" value="3"/>
            <label className="popup__rating-label" for="rating-3"></label>
            <input className="popup__rating-item" type="radio" id="rating-4" name="rating" value="4"/>
            <label className="popup__rating-label" for="rating-4"></label>
            <input className="popup__rating-item" type="radio" id="rating-5" name="rating" value="5"/>
            <label className="popup__rating-label" for="rating-5"></label>
            <input className="popup__rating-item" type="radio" id="rating-6" name="rating" value="6"/>
            <label className="popup__rating-label" for="rating-6"></label>
            <input className="popup__rating-item" type="radio" id="rating-7" name="rating" value="7"/>
            <label className="popup__rating-label" for="rating-7"></label>
            <input className="popup__rating-item" type="radio" id="rating-8" name="rating" value="8"/>
            <label className="popup__rating-label" for="rating-8"></label>
            <input className="popup__rating-item" type="radio" id="rating-9" name="rating" value="9"/>
            <label className="popup__rating-label" for="rating-9"></label>
            <input className="popup__rating-item" type="radio" id="rating-10" name="rating" value="10"/>
            <label className="popup__rating-label" for="rating-10"></label>
          </div>
        </div>
      </div>
      <button className="popup__save-button" type="submit" value="add">Add</button>
    </form>
  </div>
  )
}

export default Popup;