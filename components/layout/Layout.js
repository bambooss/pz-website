import { Fragment } from 'react';
// import MainHeader from '../navigation/MainHeader';
import MainHeader2 from '../navigation/MainHeader2';
// import classes from '../../styles/Layout.module.scss';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader2 />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
