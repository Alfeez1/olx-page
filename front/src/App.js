import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Components/Login/Login';
import ViewPost from './Pages/ViewPost';
import CreatePage from './Pages/Create';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminRegister from './Components/Admin/AdminRegister';
function App() {
  const token = localStorage.getItem('TOKEN');
  const admin = localStorage.getItem('ADMIN');

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
        {token || admin ? (
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
        <Route exact path="/admin/login">
          <AdminLogin />{' '}
        </Route>
        <Route exact path="/admin/register">
          <AdminRegister />{' '}
        </Route>
      </Router>
    </div>
  );
}

export default App;
