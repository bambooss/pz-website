import Image from 'next/image';
import Link from 'next/link';

const LogoIcon = ({ linkPath, logoPath, width, height, altText }) => (
  <Link href={linkPath || '/'} passHref>
    <a>
      <Image
        src={logoPath || '/copro-logo-cropped-square.png'}
        width={width || 35}
        height={height || 35}
        alt={altText || 'CoPro Logo'}
      />
    </a>
  </Link>
);

export default LogoIcon;
