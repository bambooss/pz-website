import classes from '../../styles/components/FeaturedImage.module.scss';

const FeaturedImage = ({ imageURL, imageAltText, overlayTitle }) => (
  <>
    <div className={classes['image-container']}>
      <img src={imageURL} alt={imageAltText} />
      <h1>{overlayTitle}</h1>
    </div>
  </>
);

export default FeaturedImage;
