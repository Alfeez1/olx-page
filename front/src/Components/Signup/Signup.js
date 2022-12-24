import React from 'react';
import './Signup.css';
import { useState } from 'react';
import axios from 'axios';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useDispatch } from 'react-redux';
import { userRegister } from '../action/dataAction';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
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
    dispatch(userRegister(formData)).then((formData) => {
      history.push('/login');
    });
  };

  return (
    <Box className="signupParentDiv" width="35%">
      <Grid
        component="form"
        flexDirection="column"
        direction="column "
        // gap={2}
        // spacing={5}
      >
        <Grid>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: 2,
              marginBottom: 2,
            }}
          >
            Signup
          </Typography>
        </Grid>
        <Stack margin="5px">
          <Grid
            component="form"
            flexDirection="column"
            direction="column "
            gap={2}
            spacing={5}
          >
            <Grid sx={{ marginTop: '5px' }}>
              {' '}
              <TextField
                label="User Name"
                variant="filled"
                required
                fullWidth
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid sx={{ marginTop: '5px' }}>
              <TextField
                label="Email"
                variant="filled"
                fullWidth
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid sx={{ marginTop: '5px' }}>
              {' '}
              <TextField
                label="Phone"
                variant="filled"
                type="Phone"
                fullWidth
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>

            <Grid sx={{ marginTop: '5px' }}>
              <TextField
                label="Password"
                variant="filled"
                fullWidth
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Button sx={{ marginTop: '10px' }} onClick={handleSubmit}>
              Submit
            </Button>
            <Link href="/admin/login" sx={{ marginTop: '5px' }}>
              Login
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
}
