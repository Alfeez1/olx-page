import React from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Link } from '@mui/material';

export default function AdminRegister() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName,
      email,
      phone,
      password,
    };
    console.log(formData);
    axios
      .post('http://localhost:8000/admin/register', formData)
      .then((res) => {
        console.log('done');
        history.push('/admin/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="signupParentDiv">
        <h1 style={{ fontSize: 23, textAlign: 'center' }}>Admin Register</h1>

        <img width="200px" height="200px" src={Logo} alt="hey"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link href="/admin/login">Login</Link>
      </div>
    </div>
  );
}
