import classes from '../../styles/components/HomePaginationSlider.module.scss';
import { useState, useEffect } from 'react';
import Scroll from '../helpers/Scroll';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

// function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(
//     getWindowDimensions()
//   );
//
//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }
//
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
//
//   return windowDimensions;
// }

const HomePaginationSlider = () => {
  const [page, setPage] = useState(1);
  // const { height, width } = useWindowDimensions();

  const handleScroll = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <div onScroll={handleScroll}>
      <Scroll />
      {/*<div>*/}
      {/*  width: {width} ~ height: {height}*/}
      {/*</div>*/}
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
      <div>m</div>
    </div>
  );
};

export default HomePaginationSlider;
