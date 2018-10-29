import React from 'react';
import PropTypes from 'prop-types';

const Photo = ({ imageUrl, altText }) => (
  <img src={imageUrl} alt={altText} />
);

Photo.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Photo;
