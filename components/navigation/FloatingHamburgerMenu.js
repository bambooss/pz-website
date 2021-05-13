import { Fragment } from 'react';

import classes from '../../styles/components/FloatingHamburgerMenu.module.scss';
import MenuModal from '../modals/MenuModal';

const FloatingHamburgerMenu = props => {
  return (
    <Fragment>
      {props.isOpened ? (
        <MenuModal toggleModal={props.toggleModal} isOpened={props.isOpened} />
      ) : null}
      <div
        className={
          !props.isOpened
            ? `${classes.hamburgerWrapper} ${classes.openWrapper}`
            : `${classes.hamburgerWrapper} ${classes.closeWrapper}`
        }
        onClick={props.toggleModal}
      >
        {
          <span
            className={
              !props.isOpened ? classes.hamburgerIcon : classes.closeIcon
            }
          />
        }
      </div>
    </Fragment>
  );
};

export default FloatingHamburgerMenu;
