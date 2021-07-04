import Image from 'next/image';
import LogoIcon from '../navigation/LogoIcon';
import classes from '../../styles/components/HeroImage.module.scss';

const HeroImage = ({ children }) => (
  <>
    <div className={classes['hero-container']}>
      <Image
        className={classes['hero-image']}
        src="/project-collaborators-featured.jpg"
        alt="Project Collaborators Featured"
        layout="fill"
        objectFit="cover"
        priority="true"
      />
    </div>
    <div className={classes['hero-content-container']}>
      <LogoIcon className={classes.logo} width={70} height={70} />
      <h1>CoPro</h1>
      <h2>
        <i>Where project ideas come to life</i>
      </h2>
      <p>
        We know how difficult is for new programmers to find projects to work
        on. We have been there. This is the reason why we have created this
        application, so you can easily find projects that suit your stack and
        skill level.
      </p>
    </div>
    <div className={classes['hero-filler']} />
  </>
);

export default HeroImage;
