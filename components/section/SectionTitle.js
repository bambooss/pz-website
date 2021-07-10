import classes from '../../styles/components/SectionTitle.module.scss';

const SectionTitle = ({ children }) => (
  <h1 className={classes['section-header']}>
    <span className={classes.divider}> </span>
    {children}
  </h1>
);

export default SectionTitle;
