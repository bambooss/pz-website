import Image from 'next/image';
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
    <div className={classes['hero-filler']} />
  </>
);

export default HeroImage;
