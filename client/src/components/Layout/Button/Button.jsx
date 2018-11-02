import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';
import Icons from '../../Icons/Icons';

const Button = ({
  iconName,
  name,
  style,
  type,
}) => {
  if (type === 'lower') {
    return (
      <button
        type="button"
        style={style}
        className={styles.LowerButton}
      >
        <div>
          {name}
        </div>
      </button>
    );
  }
  return (
    <button
      type="button"
      style={style}
      className={styles.Button}
    >
      <div className={styles.container__svg}>
        <Icons name={iconName} />
      </div>
      <div className={styles.container__text}>
        {name}
      </div>
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.object),
    PropTypes.string,
  ]),
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: {},
};
export default Button;
