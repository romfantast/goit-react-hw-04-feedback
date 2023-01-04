import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';
import { capitalizeFirstLetter } from 'components/helpers/capitalizeFirstLetter';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnsNames = options.map(name => capitalizeFirstLetter(name));

  return (
    <div className={css.btnsWrapper}>
      {btnsNames.map(btnName => (
        <button
          type="button"
          key={btnName}
          className={`${css.feedbackBtn + ' ' + css[btnName.toLowerCase()]}`}
          onClick={() => onLeaveFeedback(btnName.toLowerCase())}
        >
          {capitalizeFirstLetter(btnName)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
