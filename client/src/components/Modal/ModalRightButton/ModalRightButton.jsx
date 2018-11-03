import React from 'react';
import PropTypes from 'prop-types'

import styles from './ModalRightButton.css';

const ModalRightButton = ({ nextPhotoHandler }) => (
  <div className={styles.btnContainer}>
    <button
      type="button"
      className={styles.btn}
      onClick={() => nextPhotoHandler()}
    >
      <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" className={styles.btnSvg}>
        <path d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z" fillRule="evenodd" />
      </svg>
    </button>
  </div>
);

ModalRightButton.propTypes = {
  nextPhotoHandler: PropTypes.func.isRequired,
};

export default ModalRightButton;
