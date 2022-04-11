import React from "react";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer__container">
      <form className="footer__form form-subsctibe" action="">
        <div>
          <h2 className="form-subscribe__title">Join our newsletter</h2>
          <p className="form-subscribe__subtitle">We’ll send you a nice letter one per week. No spam.</p>
        </div>
        <fieldset className="form-subscribe__input">
          <input className="form-subscribe__email" type="email" placeholder="Enter email"/>
          <button className="form-subscribe__submit">Subscribe</button>
        </fieldset>
      </form>
      <section className="footer__links">
        <ul className="footer__list">
          <h3 className="footer__list-title">Categories</h3>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Strategy</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Action</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Shooter</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Card Game</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Simulator</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">RPG</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Multiplayer</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="footer__list-title">Company</h3>
          <li className="footer__item">
            <a href="#" className="footer__item-link">About us</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Careers</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Press</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">News</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Contact</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="footer__list-title">Legal</h3>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Terms</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Privacy</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Cookies</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Licenses</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Settings</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3 className="footer__list-title">Legal</h3>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Twitter</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Facebook</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">Dribbble</a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__item-link">GitHub</a>
          </li>
        </ul>
      </section>
      <p className="footer__copy">Copyright © GameVendor, 2022</p>
    </div>
  </footer>

  );
}
export default Footer;