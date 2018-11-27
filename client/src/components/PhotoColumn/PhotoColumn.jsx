import React from 'react';
import PropTypes from 'prop-types';

import Photo from '../Photo/Photo';
// import PhotoContainer from '../PhotoContainer/PhotoContainer';
import styles from './PhotoColumn.css';

const PhotoColumn = ({
  photos, columnType, isHeroHovered, currentHoveredPhoto, updateCurrentHandler, showModalHandler,
}) => {
  if (columnType === 'second_column') {
    return (
      <div className={[styles.column, styles.second_column].join(' ')}>
        <Photo
          imageUrl={photos[1].image_url}
          description={photos[1].description}
          photoIndex={1}
          isHeroHovered={isHeroHovered}
          currentHoveredPhoto={currentHoveredPhoto}
          updateCurrentHandler={updateCurrentHandler}
          showModalHandler={showModalHandler}
        />
        <Photo
          imageUrl={photos[2].image_url}
          description={photos[2].description}
          photoIndex={2}
          isHeroHovered={isHeroHovered}
          currentHoveredPhoto={currentHoveredPhoto}
          updateCurrentHandler={updateCurrentHandler}
          showModalHandler={showModalHandler}
        />
      </div>
    );
  }
  if (columnType === 'third_column') {
    return (
      <div className={[styles.column, styles.third_column].join(' ')}>
        <Photo
          imageUrl={photos[3].image_url}
          altText={photos[3].alt_text}
          photoIndex={3}
          isHeroHovered={isHeroHovered}
          currentHoveredPhoto={currentHoveredPhoto}
          updateCurrentHandler={updateCurrentHandler}
          showModalHandler={showModalHandler}
        />
        <Photo
          imageUrl={photos[4].image_url}
          altText={photos[4].alt_text}
          photoIndex={4}
          isHeroHovered={isHeroHovered}
          currentHoveredPhoto={currentHoveredPhoto}
          updateCurrentHandler={updateCurrentHandler}
          showModalHandler={showModalHandler}
        />
      </div>
    );
  }
  return null;
};

PhotoColumn.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnType: PropTypes.string.isRequired,
  isHeroHovered: PropTypes.bool,
  currentHoveredPhoto: PropTypes.number.isRequired,
  updateCurrentHandler: PropTypes.func.isRequired,
  showModalHandler: PropTypes.func.isRequired,
};

PhotoColumn.defaultProps = {
  isHeroHovered: false,
};

export default PhotoColumn;
