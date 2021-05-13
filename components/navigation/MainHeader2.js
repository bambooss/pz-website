import LogoIcon from './LogoIcon';
import FloatingHamburgerMenu from './FloatingHamburgerMenu';
import FloatingSocialMenu from './FloatingSocialMenu';
import classes from '../../styles/components/MainHeader2.module.scss';
import { useState } from 'react';

const MainHeader2 = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleModal = () => {
    setIsOpened(!isOpened);
  };

  return (
    <header>
      {/*<div className={classes.logo}>*/}
      {/*  <LogoIcon*/}
      {/*    linkPath={'/'}*/}
      {/*    logoPath={'/bamboos-logo-cropped.jpeg'}*/}
      {/*    altText={'Bamboos logo'}*/}
      {/*    width={35}*/}
      {/*    height={35}*/}
      {/*  />*/}
      {/*</div>*/}
      <FloatingHamburgerMenu toggleModal={toggleModal} isOpened={isOpened} />
      <FloatingSocialMenu />
    </header>
  );
};

export default MainHeader2;
