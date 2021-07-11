import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from '../../styles/components/MenuModal.module.scss';
import LogoIcon from '../navigation/LogoIcon';

const MenuModal = ({ toggleModal }) => {
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
        <div className={classes.logoWrapper} onClick={toggleModal}>
          <LogoIcon
            className={classes.logo}
            linkPath="/"
            logoPath="/copro-logo-cropped-square.png"
            altText="CoPro"
            width={35}
            height={35}
          />
          <Link href="/">
            <h1>CoPro</h1>
          </Link>
        </div>
        <nav>
          <ul className={classes.list}>
            {menuItems.map(item => (
              <li
                key={item.name}
                onClick={toggleModal}
                className={`${
                  router.pathname === item.url ? classes.active : ''
                } ${classes.listItem}`}
              >
                <Link href={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuModal;
