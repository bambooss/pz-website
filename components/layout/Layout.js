import MainHeader from '../navigation/MainHeader';
import MainHeader2 from '../navigation/MainHeader2';
import classes from '../../styles/Layout.module.scss';

function Layout({ children }) {
  return (
    <>
      <MainHeader2 />
      <main>{children}</main>
    </>
  );
}

export default Layout;
