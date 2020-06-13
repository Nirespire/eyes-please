import React from 'react'
import './App.css';
import { Layout } from 'antd'
import Navbar from './components/Navbar/Navbar';
import PullRequestList from './components/PullRequests/PullRequestList';

const { Header, Content } = Layout;

function App() {


  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <Navbar />
        </Header>

        <Content>
          <PullRequestList/>
        </Content>
      </Layout>


    </div>
  );
}

export default App;
