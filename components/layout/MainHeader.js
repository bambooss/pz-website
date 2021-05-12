import Image from 'next/image';
import Link from 'next/link';
import classes from '../../styles/components/MainHeader.module.scss';

function MainHeader() {
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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/docs">Docs</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
