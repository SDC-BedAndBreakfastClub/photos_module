import React from 'react';
import PropTypes from 'prop-types';

import styles from './ModalCloseButton.css';

const ModalCloseButton = ({ showModalHandler }) => (
  <button
    type="button"
    onClick={() => showModalHandler()}
    className={styles.btn}
  >
    <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false" className={styles.closeSvg}>
      <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" fillRule="evenodd" />
    </svg>
  </button>
);

ModalCloseButton.propTypes = {
  showModalHandler: PropTypes.func.isRequired,
};

export default ModalCloseButton;
