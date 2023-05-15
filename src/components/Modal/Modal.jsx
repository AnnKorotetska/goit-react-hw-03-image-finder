import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export function Modal({ largeImageURL, title, onClick }) {
  return (
    <div className={css.overlay} onClick={onClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={title} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
