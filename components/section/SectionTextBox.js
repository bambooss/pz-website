import classes from '../../styles/components/SectionTextBox.module.scss';

const SectionTextBox = ({ children }) => (
  <div>
    <p className={classes.content}>{children}</p>
  </div>
);

export default SectionTextBox;
