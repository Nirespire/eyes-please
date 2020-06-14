import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { Layout } from 'antd'
import Navbar from './components/Navbar/Navbar';
import PullRequestList from './components/PullRequests/PullRequestList';
import Analytics from './components/Analytics/Analytics';
import Settings from './components/Settings/Settings';

const { Header, Content } = Layout;

function App() {


  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Header>
            <Navbar />
          </Header>

          <Content>
            <Switch>
              <Route exact path="/" component={PullRequestList}/>
              <Route exact path="/analytics" component={Analytics}/>
              <Route exact path="/settings" component={Settings}/>
            </Switch>
          </Content>
        </Layout>


      </div>
    </Router>
  );
}

export default App;
