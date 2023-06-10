import React from 'react';
import "./style.css";


function Film() {
  return (
    <>
      <div className='filtHeader'>
        Film List
      </div>
      <div className='filmConteiner'>
        <img src="Персонаж_2021.jpg" className='filmImg'/>
        <div className='filmText'>
        <b>Назва:</b> Персонаж <p/>
        <b>Дата виходу:</b> 2021 <p/>
        <b>Режисер:</b> Акира Нагаи <p/>
        <b>Жанри:</b> Триллер / Криминал <p/>
        <b>Час:</b> 125 хвилин <p/>
        </div>
      </div>
      <div className='filmConteiner'>
        <img src="225px-Nashi_kotiki_poster.jpg" className='filmImg'/>
        <div className='filmText'>
        <b>Назва:</b> Наші Котики <p/>
        <b>Дата виходу:</b> 2020 <p/>
        <b>Режисер:</b> Володимир Тихий <p/>
        <b>Жанри:</b> Сатирична комедія <p/>
        <b>Час:</b> 113 хвилин <p/>
        </div>
      </div>
      <div className='filmConteiner'>
        <img src="Нерв.jpg" className='filmImg'/>
        <div className='filmText'>
        <b>Назва:</b> Нерв <p/>
        <b>Дата виходу:</b> 2016 <p/>
        <b>Режисер:</b> Генрі Джуст та Еріель Шульман <p/>
        <b>Жанри:</b> Триллер <p/>
        <b>Час:</b> 96 хвилин <p/>
        </div>
      </div>
    </>
  );
}

export default Film;