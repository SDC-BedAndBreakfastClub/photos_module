import React from 'react';
import PropTypes from 'prop-types';

import styles from './Photo.css';

const Photo = ({
  isFirstPhoto,
  imageUrl,
  altText,
  photoIndex,
  isHeroHovered,
  currentHoveredPhoto,
  updateCurrentHandler,
  showModalHandler,
}) => {
  let containerClasses = [styles.PhotoContainer];
  if (isFirstPhoto) {
    containerClasses.push(styles.PhotoContainer__firstPhoto);
  }
  if (isHeroHovered && currentHoveredPhoto !== photoIndex) {
    containerClasses.push(styles.darken);
  }
  containerClasses = containerClasses.join(' ');
  return (
    <div
      className={containerClasses}
      onMouseEnter={() => updateCurrentHandler(photoIndex)}
      onClick={() => showModalHandler(true)}
      role="presentation"
    >
      <img className={styles.Photo} src={imageUrl} alt={altText} />
    </div>
  );
};

Photo.propTypes = {
  isFirstPhoto: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  photoIndex: PropTypes.number.isRequired,
  isHeroHovered: PropTypes.bool,
  currentHoveredPhoto: PropTypes.number.isRequired,
  updateCurrentHandler: PropTypes.func.isRequired,
  showModalHandler: PropTypes.func,
};

Photo.defaultProps = {
  isFirstPhoto: false,
  isHeroHovered: false,
  showModalHandler: null,
};

export default Photo;
