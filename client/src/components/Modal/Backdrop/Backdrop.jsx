import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.css';

const Backdrop = ({ showModal }) => (showModal ? <div className={styles.Backdrop} /> : null);

Backdrop.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

export default Backdrop;
