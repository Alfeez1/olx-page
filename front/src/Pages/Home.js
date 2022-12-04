import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';

import Posts from '../Components/Posts/Posts';
import Footer from '../Components/Footer/Footer';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Home(props) {
  const history = useHistory();

  useEffect(() => {
    return () => {
      const token = localStorage.getItem('TOKEN');
      if (token) {
        history.push('/');
        console.log('  TOKEN ');
      } else {
        console.log(' NO TOKEN');
      }
    };
  }, []);

  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
