import React from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
function Header() {
  const token = localStorage.getItem('TOKEN');
  // console.log(token);
  const logoutToken = () => {
    localStorage.removeItem('TOKEN');
  };
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
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
