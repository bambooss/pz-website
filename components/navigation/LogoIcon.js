import Image from 'next/image';
import Link from 'next/link';

const LogoIcon = props => {
  return (
    <Link href={props.linkPath || '/'} passHref={true}>
      <a>
        <Image
          src={props.logoPath || '/bamboos-logo-cropped.jpeg'}
          width={props.width || 35}
          height={props.height || 35}
          alt={props.altText || 'Bamboos Logo'}
        />
      </a>
    </Link>
  );
};

export default LogoIcon;
