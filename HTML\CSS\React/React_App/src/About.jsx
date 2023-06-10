import React from 'react';
import "./style.css";


function About() {
return (
    <>
    <div>
    <h1 className="header-text">Самотій Володимир Олегович</h1>
  </div>
  <div className="image-box">
    <img src="/photo_2022-04-08_00-54-38.jpg" alt="My Image 1" className="image-1" />
    <img src="/photo_2022-09-19_22-00-17.jpg" alt="My Image 2" className="image-2" />
  </div>
  <div className="text-under-image">
    <div className='nameText'>
      <strong> Прізвище : </strong> Самотій <br /><br />
      <strong> Ім'я : </strong> Володимир <br /><br />
      <strong> По Батькові : </strong> Олегович<br /><br /> 
      <strong> Email : </strong> volodumur.samotii@gmail.com
    </div>
  </div>
    </>
  );
}


export default About;