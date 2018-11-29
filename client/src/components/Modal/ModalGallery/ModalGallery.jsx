import React from 'react';
import PropTypes from 'prop-types';

import styles from './ModalGallery.css';

const ModalGallery = ({ currentPhoto, photos, showGallery, updateCurrentPhoto }) => (
  <div className={styles.ModalGallery}>
    <div className={styles.ModalGalleryInfo}>
      <span>{`${currentPhoto + 1}/${photos.length}: ${photos[currentPhoto].description}`}</span>
      {showGallery ? <span>Hide Gallery</span> : <span>Show Gallery</span>}
    </div>
    <div className={styles.Gallery}>
      <ul className={styles.GalleryList}>
        {photos.map((photo, i) => (
          <li key={photo.id}>
            <img
              className={i === currentPhoto ? [styles.GalleryItem, styles.selected].join(' ') : styles.GalleryItem}
              src={photo.image_url}
              alt={photo.description}
              onClick={() => updateCurrentPhoto(i)}
              role="presentation"
            />
          </li>))
        }
      </ul>
    </div>
  </div>
);

ModalGallery.propTypes = {
  currentPhoto: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  showGallery: PropTypes.bool.isRequired,
};

export default ModalGallery;
