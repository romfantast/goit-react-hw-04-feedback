import React from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css';
import { ImInfo } from 'react-icons/im';

const Notification = ({ message }) => {
  return (
    <div className={css.notification}>
      {message}
      <ImInfo className={css.infoIcon} />
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
