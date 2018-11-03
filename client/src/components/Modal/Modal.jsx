import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';
import Backdrop from './Backdrop/Backdrop';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';
import ModalLeftButton from './ModalLeftButton/ModalLeftButton';
import ModalRightButton from './ModalRightButton/ModalRightButton';
import ModalPhoto from './ModalPhoto/ModalPhoto';

class Modal extends Component {
  constructor(props) {
    super(props);
    const { photos, currentPhoto } = this.props;
    this.state = {
      currentPhoto,
      photos,
    };
  }

  render() {
    const { showModal, showModalHandler } = this.props;
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
                <ModalLeftButton />
                
                <ModalRightButton />
              </div>
            </div>
            <div className={styles.ModalFooter}>Footer</div>
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
