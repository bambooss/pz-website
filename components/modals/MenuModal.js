import classes from '../../styles/components/MenuModal.module.scss';
import LogoIcon from '../navigation/LogoIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';

const MenuModal = props => {
  const router = useRouter();
  const menuItems = [
    {
      url: '/',
      name: 'Home'
    },
    {
      url: '/about',
      name: 'About'
    },
    {
      url: '/docs',
      name: 'Docs'
    },
    {
      url: '/contact',
      name: 'Contact'
    }
  ];

  return (
    <div className={classes.menuModal}>
      <div className={classes.menuModalContainer}>
        <div className={classes.logoWrapper} onClick={props.toggleModal}>
          <LogoIcon
            className={classes.logo}
            linkPath={'/'}
            logoPath={'/bamboos-logo-cropped.jpeg'}
            altText={'Bamboos logo'}
            width={35}
            height={35}
          />
          <Link href={'/'}>
            <h1>Project Zone</h1>
          </Link>
        </div>
        <nav>
          <ul className={classes.list}>
            {menuItems.map(item => {
              return (
                <li
                  key={item.name}
                  onClick={props.toggleModal}
                  className={`${
                    router.pathname === item.url ? classes.active : ''
                  } ${classes.listItem}`}
                >
                  <Link href={item.url}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuModal;
