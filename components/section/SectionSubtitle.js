import classes from '../../styles/components/SectionSubtitle.module.scss';

const SectionSubtitle = ({ children }) => (
  <h2 className={classes.subtitle}>{children}</h2>
);

export default SectionSubtitle;
