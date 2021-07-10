import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDiscord,
  FaMapMarkerAlt
} from 'react-icons/fa';
import classes from '../../styles/components/SectionProfile.module.scss';

const SectionProfile = ({
  profileImageURL,
  profileImageAlt,
  name,
  position,
  description,
  facebookProfileURL,
  twitterProfileURL,
  linkedinProfileURL,
  instagramProfileURL,
  githubProfileURL,
  discordProfileURL,
  emailAddress,
  country,
  city
}) => (
  <div className={classes['profile-section-container']}>
    <div className={classes['profile-image-container']}>
      <img src={profileImageURL} alt={profileImageAlt} />
      <div className={classes['profile-content-container']}>
        <h3>{name}</h3>
        <h4>{position}</h4>
        <p>{description}</p>
        <div className={classes['profile-social-container']}>
          {facebookProfileURL ? (
            <a href={facebookProfileURL} target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          ) : null}
          {twitterProfileURL ? (
            <a href={twitterProfileURL} target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          ) : null}
          {instagramProfileURL ? (
            <a href={instagramProfileURL} target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
          ) : null}
          {discordProfileURL ? (
            <a href={discordProfileURL} target="_blank" rel="noreferrer">
              <FaDiscord />
            </a>
          ) : null}
          {githubProfileURL ? (
            <a href={githubProfileURL} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          ) : null}
          {linkedinProfileURL ? (
            <a href={linkedinProfileURL} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          ) : null}
          {emailAddress ? (
            <a href={`mailto:${emailAddress}`}>
              <FaEnvelope />
            </a>
          ) : null}
        </div>
        <div className={classes['location-container']}>
          <FaMapMarkerAlt />
          <p>{`${city}, ${country}`}</p>
        </div>
      </div>
    </div>
  </div>
);

export default SectionProfile;
