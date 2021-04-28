import React, { useState } from 'react';

import Navrbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import Hero from '../components/Hero';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navrbar toggle={toggle} />
      <Hero />
    </>
  );
}
