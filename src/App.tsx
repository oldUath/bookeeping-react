import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './index.scss'
import Layout from "./components/Layout";






function App() {
  return (
    <Router>
              <Switch>
                <Route path="/tags">
                  <Tags />
                </Route>
                <Route path="/money">
                  <Money />
                </Route>
                <Route path="/statistics">
                  <Statistics />
                </Route>
                <Redirect exact from="/" to="/money" />
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
    </Router>
  );
}

function Statistics(){
  return (
    <Layout>
        <h2>统计页面</h2>
    </Layout>
  )
}
function Tags(){
  return(
    <Layout>
        <h2>标签页面</h2>
    </Layout>
  )
}
function Money(){
  return(
    <Layout>
        <h2>记账</h2>
    </Layout>
  )
}
function NoMatch(){
  return <h2>NoMatch</h2>
}



export default App
