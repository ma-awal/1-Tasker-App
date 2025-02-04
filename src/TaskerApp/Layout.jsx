import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskerApp from './TaskerApp';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900    ">
      <Header />
      <main className=" lg:container flex-grow">
        <TaskerApp />
      </main>
      <Footer />
    </div>
  );
}
