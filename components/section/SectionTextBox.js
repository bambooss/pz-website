import classes from '../../styles/components/SectionTextBox.module.scss';

const SectionTextBox = ({ children }) => (
  <div>
    <div className={classes.content}>{children}</div>
  </div>
);

export default SectionTextBox;
