import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import classes from '../../styles/components/FloatingSocialMenu.module.scss';

const FloatingSocialMenu = () => (
  <div className={classes.socialMenuWrapper}>
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebook />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FaTwitter />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>
    <a href="https://github.com" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
  </div>
);

export default FloatingSocialMenu;
