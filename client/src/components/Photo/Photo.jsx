import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ imageUrl, altText, photoIndex }) => (
  <img src={imageUrl} alt={altText} data-index={photoIndex} />
);

Photo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  photoIndex: PropTypes.number.isRequired,
};

export default Photo;
