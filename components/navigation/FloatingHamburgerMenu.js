import { Fragment } from 'react';

import classes from '../../styles/components/FloatingHamburgerMenu.module.scss';
import MenuModal from '../modals/MenuModal';

const FloatingHamburgerMenu = () => {
  return (
    <Fragment>
      <MenuModal />
      <div className={classes.hamburgerWrapper}>
        <span className={classes.hamburgerIcon}>&nbsp;</span>
      </div>
    </Fragment>
  );
};

export default FloatingHamburgerMenu;
