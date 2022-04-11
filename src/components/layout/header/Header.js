import React from "react";
import styles from "./Header.module.scss";
import logo from "../../../assets/logo.svg"
import Slider from "../../elements/Slider";

function Header() {
  return (
  <header className={styles.header}>
  <Slider></Slider>
  <div className={styles.header__container}>
    <a className={styles.header__location} href="#">
      <p className={styles["header__location-text"]}>Dublin, Republic of Ireland</p>
    </a>
    <img className={styles.header__logo} src={logo} alt="logo" />
    <nav className="nav">
      <a href="#" className="nav__link nav__link_type_home">
        <p className="nav__text">Home</p>
      </a>
      <a href="#" className="nav__link nav__link_type_browse" >
        <p className="nav__text">Browse</p>
      </a>
      <a href="#" className="nav__link nav__link_type_search">
        <p className="nav__text">Search</p>
      </a>
      <a href="#" className="nav__link nav__link_type_account">
        <p className="nav__text">Account</p>
      </a>
      <a href="#" className="nav__link nav__link_type_cart">
        <p className="nav__text">Cart</p>
      </a>
    </nav>
  </div>
  <div className={styles.header__separator}></div>
  <nav className={styles.header__navigation}>
    <a className={styles["header__nav-link"]} href="#">Discover</a>
    <a className={styles["header__nav-link"]} href="#">Browse</a>
    <a className={styles["header__nav-link"]} href="#">Store</a>
    <a className={styles["header__nav-link"]} href="#">Platforms</a>
    <a className={styles["header__nav-link"]} href="#">Releases</a>
    <a className={styles["header__nav-link"]} href="#">Mobile</a>
    <a className={styles["header__nav-link"]} href="#">Articles</a>
    <a className={styles["header__nav-link"]} href="#">Blog</a>
    <a className={styles["header__nav-link"]} href="#">News</a>
    <a className={styles["header__nav-link"]} href="#">Contacts</a>
  </nav>
</header>
);
}
export default Header;