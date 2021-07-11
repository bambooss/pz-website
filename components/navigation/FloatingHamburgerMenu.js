import classes from '../../styles/components/FloatingHamburgerMenu.module.scss';
import MenuModal from '../modals/MenuModal';

const FloatingHamburgerMenu = ({ isOpened, toggleModal }) => (
  <>
    {isOpened ? (
      <MenuModal toggleModal={toggleModal} isOpened={isOpened} />
    ) : null}
    <div
      className={
        !isOpened
          ? `${classes.hamburgerWrapper} ${classes.openWrapper}`
          : `${classes.hamburgerWrapper} ${classes.closeWrapper}`
      }
      onClick={toggleModal}
    >
      <span className={!isOpened ? classes.hamburgerIcon : classes.closeIcon} />
    </div>
    <div className={classes.extendedHamburger}>
      <a href="/">Login</a>
      <a href="/">Register</a>
    </div>
  </>
);

export default FloatingHamburgerMenu;
