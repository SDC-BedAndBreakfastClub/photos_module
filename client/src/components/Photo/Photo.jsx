import React from 'react';
import PropTypes from 'prop-types';

import styles from './Photo.css';

const Photo = ({
  isFirstPhoto, imageUrl, altText, photoIndex,
}) => {
  const containerClasses = isFirstPhoto
    ? [styles.PhotoContainer, styles.PhotoContainer__firstPhoto].join(' ')
    : styles.PhotoContainer;
  return (
    <div className={containerClasses}>
      <img className={styles.Photo} src={imageUrl} alt={altText} data-index={photoIndex} />
    </div>
  );
};

Photo.propTypes = {
  isFirstPhoto: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  photoIndex: PropTypes.number.isRequired,
};

Photo.defaultProps = {
  isFirstPhoto: false,
};

export default Photo;
