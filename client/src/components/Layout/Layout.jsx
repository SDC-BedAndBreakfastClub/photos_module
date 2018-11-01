import React, { Fragment } from 'react';

import styles from './Layout.css';

const Layout = () => (
  <Fragment>
    <div className={styles.buttons__upper}>Share/Save Buttons</div>
    <div className={styles.button__lower}>View Photos Button</div>
  </Fragment>
);

export default Layout;
