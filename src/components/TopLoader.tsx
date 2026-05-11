import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const TopLoader = () => {
  const ref = useRef(null);
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Start the loader on route change
    ref.current?.continuousStart();
    const timer = setTimeout(() => {
      ref.current?.complete();
    }, 500); // optional delay

    return () => clearTimeout(timer);
  }, [location, navigationType]);

  return <LoadingBar color="#2A57C7" ref={ref} height={3} />;
};

export default TopLoader;
