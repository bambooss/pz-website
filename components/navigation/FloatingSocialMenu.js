import classes from '../../styles/components/FloatingSocialMenu.module.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const FloatingSocialMenu = () => {
  return (
    <div className={classes.socialMenuWrapper}>
      <a href={'https://facebook.com'} target="_blank">
        <FaFacebook />
      </a>
      <a href={'https://twitter.com'} target="_blank">
        <FaTwitter />
      </a>
      <a href={'https://instagram.com'} target="_blank">
        <FaInstagram />
      </a>
      <a href={'https://github.com'} target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default FloatingSocialMenu;
