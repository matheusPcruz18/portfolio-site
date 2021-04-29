import React, { useState, useEffect } from 'react';

import Navrbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const scrollListener = () => {
      if(scrollY > 10){
        setHeaderBg(true);
      }else{
        setHeaderBg(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return() => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navrbar toggle={toggle} headerBg={headerBg} />
      <Hero />
      <AboutMe />
    </>
  );
}
