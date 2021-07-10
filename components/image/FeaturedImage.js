import classes from '../../styles/components/FeaturedImage.module.scss';

const FeaturedImage = () => (
  <>
    <div className={classes['image-container']}>
      <img src="/about-us-featured.jpg" alt="copro featured image" />
      <h1>About Us</h1>
    </div>
  </>
);

export default FeaturedImage;
