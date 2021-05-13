import classes from '../../styles/components/FloatingHamburgerMenu.module.scss';

const FloatingHamburgerMenu = () => {
  return (
    <div className={classes.hamburgerWrapper}>
      <span className={classes.hamburgerIcon}>&nbsp;</span>
    </div>
  );
};

export default FloatingHamburgerMenu;
