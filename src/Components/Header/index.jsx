import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header class="header">
      <div className="header__container container">
        <div className="logo"></div>
        <button className="burger"></button>
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Приложение
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Как использовать
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Начать
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
