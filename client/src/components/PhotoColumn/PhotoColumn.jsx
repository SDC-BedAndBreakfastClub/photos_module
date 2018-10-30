import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../Photo/Photo';
// import PhotoContainer from '../PhotoContainer/PhotoContainer';
import styles from './PhotoColumn.css';

const PhotoColumn = ({ photos, columnType }) => {
  if (columnType === 'second_column') {
    return (
      <div className={styles.column}>
        <Photo
          imageUrl={photos[1].image_url}
          altText={photos[1].alt_text}
          photoIndex={1}
        />
        <Photo
          imageUrl={photos[2].image_url}
          altText={photos[2].alt_text}
          photoIndex={2}
        />
      </div>
    );
  }
  if (columnType === 'third_column') {
    return (
      <div className={styles.column}>
        <Photo
          imageUrl={photos[3].image_url}
          altText={photos[3].alt_text}
          photoIndex={3}
        />
        <Photo
          imageUrl={photos[4].image_url}
          altText={photos[4].alt_text}
          photoIndex={4}
        />
      </div>
    );
  }
  return null;
};

PhotoColumn.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnType: PropTypes.string.isRequired,
};

export default PhotoColumn;
