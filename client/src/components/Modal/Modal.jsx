import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';
import Backdrop from './Backdrop/Backdrop';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';
import ModalLeftButton from './ModalLeftButton/ModalLeftButton';
import ModalRightButton from './ModalRightButton/ModalRightButton';
import ModalPhoto from './ModalPhoto/ModalPhoto';
import ModalGallery from './ModalGallery/ModalGallery';

class Modal extends Component {
  constructor(props) {
    super(props);
    const { currentPhoto } = this.props;
    this.state = {
      currentPhoto,
      showGallery: true,
    };

    this.nextPhotoHandler = this.nextPhotoHandler.bind(this);
    this.prevPhotoHandler = this.prevPhotoHandler.bind(this);
    this.updateCurrentPhoto = this.updateCurrentPhoto.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { currentPhoto } = this.props;
    if (currentPhoto !== prevProps.currentPhoto) {
      this.onUpdate(currentPhoto);
    }
  }

  onUpdate(currentPhoto) {
    this.setState({
      currentPhoto,
    });
  }

  nextPhotoHandler() {
    const { photos } = this.props;
    const { currentPhoto } = this.state;

    if (currentPhoto + 1 < photos.length) {
      this.setState({
        currentPhoto: currentPhoto + 1,
      });
    } else {
      this.setState({
        currentPhoto: 0,
      });
    }
  }

  prevPhotoHandler() {
    const { photos } = this.props;
    const { currentPhoto } = this.state;

    if (currentPhoto - 1 >= 0) {
      this.setState({
        currentPhoto: currentPhoto - 1,
      });
    } else {
      this.setState({
        currentPhoto: photos.length - 1,
      });
    }
  }

  updateCurrentPhoto(newPhotoIndex) {
    this.setState({
      currentPhoto: newPhotoIndex,
    });
  }

  render() {
    const { showModal, showModalHandler, photos } = this.props;
    const { currentPhoto, showGallery } = this.state;
    if (showModal) {
      return (
        <Fragment>
          <Backdrop showModal />
          <div className={styles.Modal}>
            <div className={styles.ModalHeader}>
              <ModalCloseButton showModalHandler={showModalHandler} />
            </div>
            <div className={styles.ModalContent}>
              <div className={styles.ModalPhotoContainer}>
                <ModalLeftButton
                  prevPhotoHandler={this.prevPhotoHandler}
                />
                <ModalPhoto photo={photos[currentPhoto]} />
                <ModalRightButton
                  nextPhotoHandler={this.nextPhotoHandler}
                />
              </div>
            </div>
            <div className={styles.ModalFooter}>
              <ModalGallery
                currentPhoto={currentPhoto}
                photos={photos}
                showGallery={showGallery}
                updateCurrentPhoto={this.updateCurrentPhoto}
              />
            </div>
          </div>
        </Fragment>
      );
    }
    return null;
  }
}

Modal.propTypes = {
  currentPhoto: PropTypes.number.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object),
  showModal: PropTypes.bool.isRequired,
  showModalHandler: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  photos: [],
};

export default Modal;
