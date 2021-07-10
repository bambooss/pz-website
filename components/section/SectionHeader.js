import classes from '../../styles/components/SectionHeader.module.scss';

const SectionHeader = ({ children }) => (
  <h1 className={classes['section-header']}>
    <span className={classes.divider}> </span>
    {children}
  </h1>
);

export default SectionHeader;
