import React, { Fragment } from 'react';

import Button from './Button/Button';
import styles from './Layout.css';

const Layout = () => (
  <Fragment>
    <div className={styles.buttons__upper}>
      <Button
        name="Share"
        iconName="share"
      />
      <Button
        name="Save"
        iconName="save"
      />
    </div>
    <div className={styles.button__lower}>
      <Button
        name="View Photos"
        iconName="null"
        type="lower"
      />
    </div>
  </Fragment>
);

export default Layout;
