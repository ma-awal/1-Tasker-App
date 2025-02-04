import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className=" lg:container flex-grow">Hello</main>
      <Footer />
    </div>
  );
}
