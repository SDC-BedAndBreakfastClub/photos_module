import React from 'react';
import PropTypes from 'prop-types';

import Backdrop from './Backdrop/Backdrop';

const Modal = ({ showModal }) => (showModal
  ? (
    <Backdrop showModal>
      <div />
    </Backdrop>
  )
  : null);

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
};

export default Modal;
