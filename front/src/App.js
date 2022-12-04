import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Components/Login/Login';
import ViewPost from './Pages/ViewPost';
import CreatePage from './Pages/Create';

function App() {
  const token = localStorage.getItem('TOKEN');

  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />{' '}
        </Route>
        <Route exact path="/signup">
          <Signup />{' '}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {token ? (
          <Route exact path="/create">
            <CreatePage />
          </Route>
        ) : (
          <Route exact path="/create">
            <Login />{' '}
          </Route>
        )}
        <Route exact path="/product/:id">
          <ViewPost />
        </Route>
      </Router>
    </div>
  );
}

export default App;
