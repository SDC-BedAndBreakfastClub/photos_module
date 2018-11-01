import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';
import Icons from '../../Icons/Icons';

const Button = ({
  iconName,
  name,
  style,
}) => (
  <button
    type="button"
    style={style}
    className={styles.Button}
  >
    <Icons name={iconName} />
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Button;
