import React, { useState, useEffect } from 'react';

import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import MyProjects from '../components/MyProjects';
import BackToTopBtn from '../components/BackToTopBtn';
import Contact from '../components/Contact';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const [showToTopBtn, setShowToTopBtn] = useState(false);

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

  useEffect(() => {
    const backToTop = () => {
      console.log(scrollY)
      if(scrollY > 500){
        setShowToTopBtn(true);
      }else{
        setShowToTopBtn(false);
      }
    }

    window.addEventListener('scroll', backToTop);

    return() => {
      window.removeEventListener('scroll', backToTop);
    }
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <BackToTopBtn show={showToTopBtn} />
      <Navbar toggle={toggle} headerBg={headerBg} />
      <Hero />
      <AboutMe />
      <MyProjects />
      <Contact />
    </>
  );
}
