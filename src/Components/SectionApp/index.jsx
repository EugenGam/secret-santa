import React from 'react';
import './style.scss';

const SectionApp = () => {
  return (
    <section className="app">
      <div className="container">
        <h1>Тайный Санта</h1>
        <p className="app__title">для вас и ваших друзей</p>
        <p className="app__text">
          С помощью нашего сервиса вы сможете организовать тайный обмен
          подарками между коллегами, дурзьями или родственниками Вам не нужно
          регистрироваться, запоминать пароли или логины. Достаточно выбрать
          удобный способ загрузки списка участников и выбрать бюджет. Все
          учасники получат письма с именем подопечного и короткую
          организационную информацию
        </p>
        <button className="app__button">Попробовать</button>
      </div>
    </section>
  );
};

export default SectionApp;
