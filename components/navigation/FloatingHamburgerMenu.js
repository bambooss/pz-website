import { Fragment, useState } from 'react';

import classes from '../../styles/components/FloatingHamburgerMenu.module.scss';
import MenuModal from '../modals/MenuModal';

const FloatingHamburgerMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Fragment>
      {isOpened ? <MenuModal /> : null}
      <div
        className={
          !isOpened
            ? `${classes.hamburgerWrapper} ${classes.openWrapper}`
            : `${classes.hamburgerWrapper} ${classes.closeWrapper}`
        }
        onClick={toggleModal}
      >
        {
          <span
            className={!isOpened ? classes.hamburgerIcon : classes.closeIcon}
          />
        }
      </div>
    </Fragment>
  );
};

export default FloatingHamburgerMenu;
