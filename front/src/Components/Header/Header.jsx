import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import Link from '@mui/material/Link';
import { border } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(25),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  // marginLeft: '320px',
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const token = localStorage.getItem('TOKEN');
  const logoutToken = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('ADMIN');
  };
  const history = useHistory();
  const [newProduct, setNewProduct] = useState([]);
  const [newItem, setNewItem] = useState([]);
  const getdata = async () => {
    await axios.get('/getdata').then((res) => {
      const secondData = res.data.newData;
      setNewProduct(secondData);
    });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: 'none', sm: 'block' },
              fontWeight: 'bolder',
              fontSize: 20,
            }}
          >
            <Link color="inherit" href="/">
              SaLeCarT
            </Link>
          </Typography>
          <Stack
            sx={{
              width: '600px',
              marginLeft: '',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Search sx={{ display: { xs: 'none', md: 'block' } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={newProduct.map((option) => option.item)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </Search>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Stack>
              {!token ? (
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '',
                    marginRight: 20,
                  }}
                >
                  <Link href="/login">
                    <Button
                      variant="button"
                      // class=".MuiTypography-button"
                      sx={{
                        color: 'white',
                        backgroundColor: '',
                        boxShadow: 5,
                        fontSize: 11,
                      }}
                    >
                      login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      variant="button"
                      sx={{
                        color: 'white',
                        backgroundColor: '',
                        boxShadow: 5,
                        fontSize: 11,
                      }}
                    >
                      signup
                    </Button>
                  </Link>
                  <hr />
                </Box>
              ) : (
                <Box
                  className=""
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '',
                    marginRight: 20,
                  }}
                >
                  <Link href="/login">
                    <Button
                      variant="button"
                      onClick={logoutToken}
                      sx={{
                        color: 'white',
                        fontSize: 11,
                        backgroundColor: 'inherit',
                        boxShadow: 5,
                      }}
                    >
                      logout
                    </Button>
                  </Link>
                </Box>
              )}
            </Stack>
          </Box>
          <Box
            sx={{
              display: { xs: 'block', md: 'flex' },
              boxShadow: 10,
              borderRadius: 2,
            }}
          >
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="error">
                <Typography
                  fontSize="19px"
                  sx={{ display: { xs: 'none', md: 'flex' } }}
                >
                  <Link
                    color="inherit"
                    href="/create"
                    sx={{ textDecoration: 'none' }}
                  >
                    Sell
                  </Link>{' '}
                </Typography>
                <StorefrontIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
