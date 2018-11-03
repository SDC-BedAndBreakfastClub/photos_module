import React from 'react';
import PropTypes from 'prop-types';

import styles from './ModalPhoto.css';

const ModalPhoto = ({ photo }) => (
  <div className={styles.ModalPhoto}>
    <img src={photo.image_url} alt={photo.alt_text} />
  </div>
);

ModalPhoto.propTypes = {
  photo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ModalPhoto;
