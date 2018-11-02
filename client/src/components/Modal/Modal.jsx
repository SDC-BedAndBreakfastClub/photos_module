import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.css';
import Backdrop from './Backdrop/Backdrop';
import ModalCloseButton from './ModalCloseButton/ModalCloseButton';

class Modal extends Component {
  constructor(props) {
    super(props);
    const { photos } = this.props;
    this.state = {
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
            <div className={styles.ModalContent} />
          </div>
        </Fragment>
      );
    }
    return null;
  }
}

Modal.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  showModal: PropTypes.bool.isRequired,
  showModalHandler: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  photos: [],
};

export default Modal;
