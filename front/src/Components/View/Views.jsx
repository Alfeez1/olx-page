import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Link,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import './View.css';
import { border } from '@mui/system';
const Views = () => {
  const [singleData, setSingleData] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  const history = useHistory();
  const [newProduct, setNewProduct] = useState([]);

  const { id } = useParams('');

  const getdata = async () => {
    await axios
      .get('http://localhost:8000/getdata')
      .then((res) => {
        const secondData = res.data.newData;
        console.log(secondData);
        setNewProduct(secondData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProduct = async () => {
    await axios
      .get(`http://localhost:8000/getproduct/${id}`)
      .then((response) => {
        const itemdata = response.data;
        setSingleData(itemdata);
        console.log(itemdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const image = e.target.files[0];
    console.log(image);
    setImage(image);
  };

  const updateproduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('item', item);
    formData.append('price', price);
    formData.append('category', category);
    console.log(formData);
    await axios
      .patch(`http://localhost:8000/updateproduct/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        history.push(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sameData = newProduct.filter(
    (c) =>
      c.item === singleData.item ||
      c.price === singleData.price ||
      c.name === singleData.name
  );
  console.log(sameData);
  useEffect(() => {
    getProduct();
    getdata();
    console.log(newProduct);
  }, []);

  const DeleteProduct = async () => {
    await axios
      .delete(`http://localhost:8000/deleteproduct/${id}`)
      .then((res) => {
        // console.log(res);
        const dataDelete = res.data;
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const admin = localStorage.getItem('ADMIN');

  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={3}
      padding={5}
      paddingTop={13}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        boxShadow={6}
        width="100%"
        height={500}
        marginBottom={3}
      >
        <img
          style={{ width: '100%', height: '100%' }}
          src={`/images/${singleData._id}.jpg`}
          alt=""
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        width="100%"
        sx={{ backgroundColor: '' }}
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        direction="column"
        gap={2}
      >
        {' '}
        {admin ? (
          <Grid>
            <Stack
              spacing={1}
              direction="row"
              style={{ marginLeft: 0, marginTop: 1 }}
            >
              <Button variant="outlined" onClick={handleOpen}>
                Edit
                <EditIcon />
              </Button>
              <Button variant="outlined" onClick={DeleteProduct}>
                Delete
                <DeleteIcon />
              </Button>
            </Stack>
          </Grid>
        ) : (
          ''
        )}
        <Grid
          direction="column"
          gap={3}
          backgroundColor=""
          sx={{ width: '70%' }}
        >
          <Grid
            sx={{
              backgroundColor: '',
              border: 2,
              padding: 2,
              boxShadow: 10,
            }}
          >
            <Grid>
              <Typography
                variant="h5"
                sx={{
                  fontSize: 25,
                  fontFamily: 'bolder',
                  // margin: 'auto',
                  textAlign: 'center',

                  // marginRight: '-10px',
                }}
              >
                Product Detials
              </Typography>
            </Grid>
            <Grid marginTop="4px">
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bolder',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                {singleData.item}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                {singleData.category}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                &#x20B9;{singleData.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          direction="column"
          gap={3}
          backgroundColor=""
          sx={{ width: '70%' }}
        >
          <Grid
            sx={{
              backgroundColor: '',
              border: 2,
              padding: 2,
              boxShadow: 10,
            }}
          >
            <Grid>
              <Typography
                variant="h5"
                sx={{
                  fontSize: 25,
                  fontFamily: 'bolder',
                  textAlign: 'center',
                }}
              >
                Seller Detials
              </Typography>
            </Grid>
            <Grid marginTop="4px">
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bolder',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                Mobile : {singleData.phone}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                Email : {singleData.email}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                &#x20B9;{singleData.price}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  margin: '2px',
                  alignContent: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  display: 'flex',
                }}
              >
                <Link href={`https://wa.me/${singleData.phone}`}>
                  <WhatsAppIcon sx={{ fontSize: '35px' }} color="success" />
                </Link>
                <Link href={`tel:${singleData.phone}`}>
                  {' '}
                  <CallIcon sx={{ fontSize: '35px' }} color="success" />
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        sx={{ backgroundColor: '' }}
        width="100%"
        margin="auto"
        marginTop={10}
      >
        <Grid
          container
          spacing={1}
          backgroundColor=""
          width="100%"
          sx={{ boxShadow: 10, padding: 2 }}
          margin="auto"
        >
          <Grid item xs={12} sm={12} md={12} lg={11} xl={11} margin="auto">
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
              Similar Products
            </Typography>
          </Grid>
          {sameData.map((obj) => (
            <Grid item xs={4} sm={4} md={2} lg={1.5} xl={1.5}>
              <Card
                backgroundColor="black"
                sx={{ minHeight: 315, maxHeight: 320 }}
              >
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
                          padding: 2,
                          objectFit: 'contain',
                        }}
                        image={`/images/${obj._id}.jpg`}
                      ></CardMedia>
                    </Grid>
                    <CardContent>
                      <Typography
                        variant="h7"
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
      </Grid>
    </Grid>
  );
};

export default Views;
