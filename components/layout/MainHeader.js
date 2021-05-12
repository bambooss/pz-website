import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from '../../styles/components/MainHeader.module.scss';
import { useRouter } from 'next/router';
import LogoIcon from '../navigation/LogoIcon';

import { FaUserCircle } from 'react-icons/fa';

function MainHeader() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleModal = () => {
    setIsOpened(!isOpened);
  };
  const closeModal = () => {
    setIsOpened(false);
  };
  const router = useRouter();
  return (
    <header className={classes.main}>
      <LogoIcon
        linkPath={'/'}
        logoPath={'/bamboos-logo-cropped.jpeg'}
        altText={'Bamboos logo'}
        width={35}
        height={35}
      />
      <nav>
        <ul className={classes.list}>
          <li
            className={`${router.pathname === '/' ? classes.active : ''} ${
              classes.listItem
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${router.pathname === '/about' ? classes.active : ''} ${
              classes.listItem
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${router.pathname === '/docs' ? classes.active : ''} ${
              classes.listItem
            }`}
          >
            <Link href="/docs">Docs</Link>
          </li>
          <li
            className={`${
              router.pathname === '/contact' ? classes.active : ''
            } ${classes.listItem}`}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li className={classes.listItem} onClick={toggleModal}>
            <a>
              <FaUserCircle />
              {isOpened ? (
                <div
                  onMouseLeave={closeModal}
                  className={classes.modalContainer}
                >
                  <div className={classes.modalContent}>
                    <Link href="http://localhost:3000/signin">Login</Link>
                  </div>
                  <div className={classes.modalContent}>
                    <Link href="http://localhost:3000/signup">Register</Link>
                  </div>
                </div>
              ) : null}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
