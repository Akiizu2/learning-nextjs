import React from 'react';

import styles from './navbar.module.scss';

import { signOut } from '../../firebase/auth'

const ProfileMenu = () => (
  <div className={styles.profileMenu}>
    <div className={styles.menuWrapper}>
      <div
        onClick={signOut}
        className={styles.menuItem}>
        LOG OUT
    </div>
    </div>
  </div>
)

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbarWrapper}>
        <div className={styles.leftSection}>
        </div>
        <div className={styles.rightSection}>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;