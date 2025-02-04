import React from 'react';
import TaskerApp from './TaskerApp';
import Layout from '../../components/Layout';
const links = ['About', 'Home', 'Contact'];

export default function Index() {
  return (
    <Layout title={'TaskerApp'} links={links}>
      <div className="bg-gray-900">
        <TaskerApp />
      </div>
    </Layout>
  );
}
