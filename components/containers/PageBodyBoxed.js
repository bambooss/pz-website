import classes from '../../styles/components/PageBodyBoxed.module.scss';

const PageBodyBoxed = ({ children }) => (
  <div className={classes['body-container']}>{children}</div>
);

export default PageBodyBoxed;
