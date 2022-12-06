import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import axios from 'axios';
import { Stack, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

function Header() {
  const token = localStorage.getItem('TOKEN');
  // console.log(token);
  const logoutToken = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('ADMIN');
  };
  const history = useHistory();

  const [newProduct, setNewProduct] = useState([]);
  const [newItem, setNewItem] = useState([]);

  const getdata = async () => {
    await axios.get('http://localhost:8000/getdata').then((res) => {
      const secondData = res.data.newData;
      setNewProduct(secondData);
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <a href="/admin/login">
            <Typography
              style={{ color: 'black', fontWeight: 'bolder', fontSize: 20 }}
            >
              SaLeCarT
            </Typography>
          </a>
        </div>

        <Stack sx={{ width: 300 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={newProduct.map((option) => option.item)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search input"
                InputProps={{
                  ...params.InputProps,
                  type: 'search',
                }}
              />
            )}
          />
        </Stack>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div>
          {!token ? (
            <div className="loginPage">
              <a href="/login">
                <button>login</button>
              </a>
              <a href="/signup" style={{ margin: 2 }}>
                <button>signup</button>
              </a>
              <hr />
            </div>
          ) : (
            <div className="loginPage">
              <a href="/login">
                <button onClick={logoutToken}>logout</button>
              </a>
            </div>
          )}
        </div>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>{' '}
            <a href="/create">
              <span>SELL</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
