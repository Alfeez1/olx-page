import axios from 'axios';
import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorOne, setErrorOne] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const loginData = {
    email,
    password,
  };
  const onLogin = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/login', loginData)
      .then((res) => {
        localStorage.setItem('TOKEN', res.data.token);
        console.log(res.data.token);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
        setErrorOne(true);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="hello" />
        <form onSubmit={onLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <div>
            {errorOne ? (
              <text style={{ color: 'red' }}>{errorMessage}</text>
            ) : (
              ''
            )}
          </div>
          <button onSubmit={onLogin}>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
