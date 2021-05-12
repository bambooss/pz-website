import Image from 'next/image';
import Link from 'next/link';
import classes from '../../styles/components/MainHeader.module.scss';
import { useRouter } from 'next/router';

function MainHeader() {
  const router = useRouter();
  return (
    <header className={classes.main}>
      <Link href="/">
        <a>
          <Image
            src={'/bamboos-logo-cropped.jpeg'}
            width={35}
            height={35}
            alt={'Bamboos Logo'}
          />
        </a>
      </Link>
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
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
