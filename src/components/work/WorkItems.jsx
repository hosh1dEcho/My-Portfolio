import React, { useState } from 'react';

const WorkItems = ({item}) => {
   
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__description-container">
        <p className="work__description">{item.description}</p>
      </div>
      <a
        href={item.href}
        className="work__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
}

export default WorkItems