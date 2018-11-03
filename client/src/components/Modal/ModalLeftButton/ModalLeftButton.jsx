import React from 'react';
import PropTypes from 'prop-types';

import styles from './ModalLeftButton.css';

const ModalLeftButton = ({ prevPhotoHandler }) => (
  <div className={styles.btnContainer}>
    <button
      type="button"
      className={styles.btn}
      onClick={() => prevPhotoHandler()}
    >
      <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false" className={styles.btnSvg}>
        <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd" />
      </svg>
    </button>
  </div>
);

ModalLeftButton.propTypes = {
  prevPhotoHandler: PropTypes.func.isRequired,
};

export default ModalLeftButton;
