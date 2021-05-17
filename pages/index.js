import Head from 'next/head';
// import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import HomePaginationSlider from '../components/navigation/HomePaginationSlider';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Zone</title>
        <meta
          name="description"
          content="Connecting projects with developers"
        />
      </Head>
      <HomePaginationSlider />
    </div>
  );
}
