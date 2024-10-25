import React from 'react';
import HashtagCreateToInnovate from '../HashtagCreateToInnovate'; // Adjust path as needed
import './ScrollSection3.scss';
const ScrollSection3 = ({ background, headingOrange, description }) => {
  return (
    <div className='about_rules scroll-section'>
      <img className='background' src={background} alt="" />
      <div className='about_rules__container'>
        <div className='about_rules__content'>
          <span className='about_rules__content__heading'>
            <h1 className='about_rules__content__heading--orange'>{headingOrange}</h1>
          </span>

          <p className='about_rules__content__description'>
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection3;
