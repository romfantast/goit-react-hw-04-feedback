import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackCaption.module.css';

const FeedbackCaption = ({ title, children }) => {
  return (
    <>
      <div className={`${title === 'Statistic' ? css.statistic : css.caption}`}>
        {children}
      </div>
    </>
  );
};

FeedbackCaption.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FeedbackCaption;
