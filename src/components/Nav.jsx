import React from 'react';

const Nav = () => {
  return (
    <nav className="w-full fixed top-0 left-0">
      <div className="flex justify-between mx-5 my-4 px-8 py-5 bg-[#0A0E14] rounded-3xl 
      backdrop-blur-sm bg-opacity-60">
        <a href="#home" className="mr-6">Jacob Fu</a>
        <div className="flex gap-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#timeline" className="hover:underline">Timeline</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
