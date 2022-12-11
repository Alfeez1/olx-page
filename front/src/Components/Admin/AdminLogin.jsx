import axios from 'axios';
import React, { useState } from 'react';
import { Box, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import './Login.css';
import { useHistory } from 'react-router-dom';
function AdminLogin() {
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
      .post('http://localhost:8000/admin/login', loginData)
      .then((res) => {
        localStorage.setItem('ADMIN', res.data.adminToken);
        console.log(res.data);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.message);
        setErrorOne(true);
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
            Admin Signup
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
            <Grid>
              {errorOne ? (
                <Typography
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}
                >
                  {errorMessage}
                </Typography>
              ) : (
                ''
              )}
            </Grid>
            <Button sx={{ marginTop: '10px' }} onClick={onLogin}>
              Submit
            </Button>
            <Link href="/admin/signup" sx={{ marginTop: '5px' }}>
              signup
            </Link>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
}

export default AdminLogin;
