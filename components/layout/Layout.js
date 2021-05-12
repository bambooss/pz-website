import { Fragment } from 'react';
import MainHeader from './MainHeader';
import classes from '../../styles/Layout.module.scss';

function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
