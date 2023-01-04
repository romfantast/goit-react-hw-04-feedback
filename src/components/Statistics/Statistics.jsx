import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {
  ImSmile,
  ImWondering,
  ImSad,
  ImCalculator,
  ImArrowUp2,
  ImArrowDown2,
} from 'react-icons/im';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statsWrapper}>
      <p className={css.statsItem}>
        <ImSmile className={css.good} />
        Good: {good}
      </p>
      <p className={css.statsItem}>
        <ImWondering className={css.neutral} />
        Neutral: {neutral}
      </p>
      <p className={css.statsItem}>
        <ImSad className={css.bad} />
        Bad: {bad}
      </p>
      <p className={css.statsItem}>
        <ImCalculator />
        Total: {total}
      </p>
      <p className={css.statsItem}>
        {positivePercentage > 50 ? <ImArrowUp2 /> : <ImArrowDown2 />}
        Positive: {positivePercentage + '%'}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
