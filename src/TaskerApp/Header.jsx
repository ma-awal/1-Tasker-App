import React from 'react';

function Header() {
  return (
    <header className="bg-indigo-950 py-4  ">
      <div className="container flex items-center justify-between">
        <a className="text-3xl font-bold  text-orange-300 uppercase">Tasker</a>
        <div className="flex gap-4 items-center justify-end text-white  ">
          <a href="#" className="text-orange-400 font-base capitalize">
            About
          </a>
          <a href="#" className="text-orange-400 font-base capitalize">
            Home
          </a>
          <a href="#" className="text-orange-400 font-base capitalize">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
