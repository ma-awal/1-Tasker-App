import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskerApp from './TaskerApp';

export default function Layout() {
  return (
    <div className="h-screen flex flex-col bg-gray-900     ">
      <Header />
      <main className=" lg:container flex-grow flex justify-center flex-col">
        <TaskerApp />
      </main>
      <Footer />
    </div>
  );
}
