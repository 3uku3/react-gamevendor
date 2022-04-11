import React from "react";

function Faq() {
  return(
    <section className="faq">
      <h2 className="faq__title">Frequently asked questions</h2>
      <p className="faq__subtitle">Everything you need to know about the games.</p>
      <ul className="faq__items">
        <li className="faq__item">
          <button className="faq__button">How does work?</button>
          <div className="faq__content">
            <p className="faq__item-text">A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown
              on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller,
              keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.</p>
          </div>
        </li>
        <li className="faq__item">
          <button className="faq__button faq__button_active">What is a game?</button>
          <div className="faq__content faq__content_active">
            <p className="faq__item-text">A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown
              on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller,
              keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.</p>
            <ul className="faq__content-list">
              <li className="faq__item-list">
                <p className="faq__text-list">motion sensing device,</p>
              </li>
              <li className="faq__item-list">
                <p className="faq__text-list">controller,</p>
              </li>
              <li className="faq__item-list">
                <p className="faq__text-list">keyboard,</p>
              </li>
              <li className="faq__item-list">
                <p className="faq__text-list">joystick.</p>
              </li>
            </ul>
            <h3 className="faq__item-title">Visual feedback.</h3>
            <p className="faq__item-text">A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback.</p>
          </div>
        </li>
        <li className="faq__item">
          <button className="faq__button">Is there a free trial available?</button>
          <div className="faq__content">
            <p className="faq__item-text">A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown
              on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller,
              keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.</p>
          </div>
        </li>
        <li className="faq__item">
          <button className="faq__button">How does billing work?</button>
          <div className="faq__content">
            <p className="faq__item-text">A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller, keyboard, or motion sensing device – to generate visual feedback. This feedback is shown
              on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset. A video game or computer game is an electronic game that involves interaction with a user interface or input device – such as a joystick, controller,
              keyboard, or motion sensing device – to generate visual feedback. This feedback is shown on a video display device, such as a TV set, monitor, touchscreen, or virtual reality headset.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Faq;