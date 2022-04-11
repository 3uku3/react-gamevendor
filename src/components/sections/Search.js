import React from "react";

function Search() {
  return (
    <section className="search">
      <form className="search__form" action="">
        <fieldset className="search__filters">
          <div className="search__container">
            <label className="search__label" for="search">Search for games</label>
            <input className="search__input-text" type="text" id="search" placeholder="Search..."/>
          </div>
          <div className="search__container dropdown">
            <label className="search__label" for="category">Category</label>
            <div className="search__category" id="category">
              <p className="search__category-selected search__category-selected_type_text-first">
                Multiplayer RPG
                <button className="search__close search__close_position_button">
                </button>
              </p>
              <p className="search__category-selected search__category-selected_type_text-second">
                Multiplayer RPG
                <button className="search__close search__close_position_button">
                </button>
              </p>
              <p className="search__category-selected search__category-selected_type_counter">
                +6
                <button className="search__close search__close_position_button">
                </button>
              </p>
              <img className="search__select-icon" src="/assets/icon/arrow-search.svg" alt="close"/>
            </div>
            <div className="dropdown__items search__category-dropdown">
              <button className="dropdown__item">Shooter</button>
              <button className="dropdown__item">Action</button>
              <button className="dropdown__item">Multiplayer RPG</button>
              <button className="dropdown__item">Card Game</button>
              <button className="dropdown__item">Strategy</button>
              <button className="dropdown__item">Action RPG</button>
            </div>
          </div>
          <div className="search__container dropdown">
            <label className="search__label" for="sort">Sort by</label>
            <div className="search__sort" id="sort">
              <p className="search__selected-sort">Popular</p>
              <img className="search__select-icon" src="/assets/icon/arrow-search.svg" alt="close"/>
            </div>
            <div className="dropdown__items search__sort-dropdown">
              <button className="dropdown__item">Popular</button>
              <button className="dropdown__item">Date</button>
            </div>
          </div>
          <button className="search__filters-button"><img className="search__filters-icon" src="/assets/icon/filters.svg"
              alt="Filters icon"/>Filters</button>
        </fieldset>
        <fieldset className="search__selected">
          <div className="search__selected-button">
            Strategy
            <button className="search__close search__close_position_selected">
            </button>
          </div>
          <div className="search__selected-button">
            RPG
            <button className="search__close search__close_position_selected">
            </button>
          </div>
          <div className="search__selected-button">
            Action
            <button className="search__close search__close_position_selected">
            </button>
          </div>
          <div className="search__selected-button">
            Shooter
            <button className="search__close search__close_position_selected">
            </button>
          </div>
          <div className="search__selected-button search__selected-clear">
            Clear all
            <button className="search__close search__close_position_selected">
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}

export default Search;