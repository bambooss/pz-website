import LogoIcon from './LogoIcon';
import FloatingHamburgerMenu from './FloatingHamburgerMenu';
import classes from '../../styles/components/MainHeader2.module.scss';

const MainHeader2 = () => {
  return (
    <header>
      <div className={classes.logo}>
        <LogoIcon
          linkPath={'/'}
          logoPath={'/bamboos-logo-cropped.jpeg'}
          altText={'Bamboos logo'}
          width={35}
          height={35}
        />
      </div>
      <FloatingHamburgerMenu />
    </header>
  );
};

export default MainHeader2;
