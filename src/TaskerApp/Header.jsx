import React from 'react';

function Header() {
  return (
    <header className="bg-slate-50 py-4  ">
      <div className="container flex items-center justify-between">
        <a className="text-3xl font-bold text-red-500 uppercase">Tasker</a>
        <div className="flex gap-4 items-center justify-end text-red-500 font-semibold ">
          <a href="#" className="  font-base capitalize">
            About
          </a>
          <a href="#" className="  font-base capitalize">
            Home
          </a>
          <a href="#" className="  font-base capitalize">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
