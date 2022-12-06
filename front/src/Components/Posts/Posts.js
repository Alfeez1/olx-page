import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { minHeight, Stack } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {
  const [newProduct, setNewProduct] = useState([]);
  const [bikes, setBikes] = useState([]);
  const [pets, setPets] = useState([]);
  const [mobile, setMobile] = useState([]);

  const getdata = async () => {
    await axios
      .get('http://localhost:8000/getdata')
      .then((res) => {
        const secondData = res.data.newData;
        setNewProduct(secondData);
        try {
          const vehicles = newProduct.filter(
            (c) => c.category === 'Bikes & Cars'
          );
          setBikes(vehicles);
          try {
            try {
              const mobilePhone = newProduct.filter(
                (c) => c.category === 'Mobile Accessories'
              );
              setMobile(mobilePhone);
            } catch (error) {
              console.log(error);
            }
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          console.log(error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(pets, mobile, bikes);
  useEffect(() => {
    const petList = newProduct.filter((c) => c.category === 'Pets');
    console.log(petList);
    setPets(petList);
    getdata();
  }, []);
  const admin = localStorage.getItem('ADMIN');
  let price = newProduct.sort((a, b) => a.price - b.price);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {newProduct?.map((obj, key) => (
            <div className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <a key={obj._id} href={`/product/${obj._id}`}>
                  <img src={`/images/${obj._id}.jpg`} alt={obj.item} />
                </a>
              </div>
              <div className="content">
                <p className="rate">{obj.item}</p>
                <span className="kilometer">{obj.price}</span>
                <p className="name"> {obj.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {' '}
          <Typography
            variant="h5"
            sx={{
              marginTop: 1,

              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            Featured Products
          </Typography>
        </Grid>
        {price.map((obj) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={4}
            lg={3}
            xl={3}
            backgroundColor="white"
            sx={
              {
                // paddingRight: 1,
                // padding: 1,
                // margin: 1,
              }
            }
          >
            <Card backgroundColor="black" sx={{}}>
              <Link href={`/product/${obj._id}`}>
                <CardActionArea>
                  <Grid
                    sx-={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      sx={{
                        objectFit: 'contain',
                        padding: 2,
                      }}
                      image={`/images/${obj._id}.jpg`}
                    ></CardMedia>
                  </Grid>
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                      }}
                    >
                      {obj.item}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {obj.category}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      &#x20B9; {obj.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} sx={{ backgroundColor: ' ', padding: 3 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {' '}
          <Typography
            variant="h5"
            sx={{
              marginTop: 1,
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            Bikes & Cars
          </Typography>
        </Grid>
        {bikes.map((obj) => (
          <Grid item xs={4} sm={3} md={2} lg={2} xl={2} backgroundColor="white">
            <Card backgroundColor="black" sx={{}}>
              <Link>
                <CardActionArea>
                  <Grid
                    sx-={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      sx={{
                        padding: 2,
                        objectFit: 'contain',
                      }}
                      image={`/images/${obj._id}.jpg`}
                    ></CardMedia>
                  </Grid>
                  <CardContent>
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                      }}
                    >
                      {obj.item}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      {obj.category}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                    >
                      &#x20B9; {obj.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} sx={{ backgroundColor: ' ' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {' '}
          <Typography
            variant="h5"
            sx={{
              marginTop: 1,
              backgroundColor: '',
              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            Mobile Accessories
          </Typography>
        </Grid>
        {mobile.map((obj) => (
          <Grid itemxs={4} sm={3} md={2} lg={2} xl={2} backgroundColor="white">
            <Card backgroundColor="black" sx={{}}>
              <CardActionArea>
                <Grid
                  sx-={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    sx={{
                      padding: 2,
                      objectFit: 'contain',
                    }}
                    image={`/images/${obj._id}.jpg`}
                  ></CardMedia>
                </Grid>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'black',
                      display: 'flex',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {obj.item}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'black',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {obj.category}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'black',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    &#x20B9; {obj.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} sx={{ backgroundColor: ' ' }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {' '}
          <Typography
            variant="h5"
            sx={{
              marginTop: 1,

              color: 'black',
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            Pets
          </Typography>
        </Grid>
        {pets.map((obj) => (
          <Grid
            item
            xs={4}
            sm={3}
            md={2}
            lg={2}
            xl={2}
            backgroundColor="white"
            sx={
              {
                // paddingRight: 1,
                // padding: 1,
                // margin: 1,
              }
            }
          >
            <Card backgroundColor="black" sx={{}}>
              <CardActionArea>
                <Grid
                  sx-={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    sx={{
                      padding: 2,
                      objectFit: 'contain',
                    }}
                    image={`/images/${obj._id}.jpg`}
                  ></CardMedia>
                </Grid>
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: 'black',
                      display: 'flex',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                    }}
                  >
                    {obj.item}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'black',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    {obj.category}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'black',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    &#x20B9; {obj.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Posts;
