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

import developerProfiles from '../../data/developerProfiles';

const SectionProfile = () => {
  const devProfiles = () =>
    developerProfiles.map(profile => (
      <div className={classes['profile-image-container']}>
        <img src={profile.profileImageURL} alt={profile.profileImageAlt} />
        <div className={classes['profile-content-container']}>
          <h3>{profile.name}</h3>
          <h4>{profile.position}</h4>
          <p>{profile.description}</p>
          <div className={classes['profile-social-container']}>
            {profile.facebookProfileURL ? (
              <a
                href={profile.facebookProfileURL}
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook />
              </a>
            ) : null}
            {profile.twitterProfileURL ? (
              <a
                href={profile.twitterProfileURL}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            ) : null}
            {profile.instagramProfileURL ? (
              <a
                href={profile.instagramProfileURL}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            ) : null}
            {profile.discordProfileURL ? (
              <a
                href={profile.discordProfileURL}
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
            ) : null}
            {profile.githubProfileURL ? (
              <a
                href={profile.githubProfileURL}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            ) : null}
            {profile.linkedinProfileURL ? (
              <a
                href={profile.linkedinProfileURL}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            ) : null}
            {profile.emailAddress ? (
              <a href={`mailto:${profile.emailAddress}`}>
                <FaEnvelope />
              </a>
            ) : null}
          </div>
          <div className={classes['location-container']}>
            <FaMapMarkerAlt />
            <p>{`${profile.city}, ${profile.country}`}</p>
          </div>
        </div>
      </div>
    ));

  return (
    <div className={classes['profile-section-container']}>{devProfiles()}</div>
  );
};

export default SectionProfile;
