import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
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
import { useDispatch, useSelector } from 'react-redux';
import { getData, getproduct } from '../action/dataAction';

const Views = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  const { productslist } = useSelector((state) => state?.user);
  const { singleProduct } = useSelector((state) => state?.user);
  const { _id, name, imageLength } = singleProduct;
  const theme = useTheme();
  // console.log(imageLength.length);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const { id } = useParams('');
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };

  const updateproduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('item', item);
    formData.append('price', price);
    formData.append('category', category);
    await axios
      .patch(`http://localhost:8000/updateproduct/${id}`, formData)
      .then((res) => {
        history.push(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sameData = productslist.filter(
    (c) =>
      c.item === singleProduct.item ||
      c.price === singleProduct.price ||
      c.name === singleProduct.name
  );
  const size = singleProduct.imageLength?.length;
  console.log(size);
  useEffect(() => {
    // getProduct();
    dispatch(getData());
    dispatch(getproduct(id));
  }, []);
  const categories = [
    {
      value: 'Bikes & Cars',
      label: 'Bikes & Cars',
    },
    {
      value: 'Mobile Accessories',
      label: 'Mobile Accessories',
    },
    {
      value: 'Computer & Laptops',
      label: 'Computer & Laptops',
    },
    {
      value: 'Pets',
      label: 'Pets',
    },
  ];
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const arrayData = [];
  for (let i = 1; i <= size; i++) {
    arrayData.push(i);
    console.log(_id + i);
  }
  const DeleteProduct = async () => {
    await axios
      .delete(`http://localhost:8000/deleteproduct/${id}`)
      .then((res) => {
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
        width="100%"
        height={500}
        marginBottom={3}
      >
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {arrayData.map((obj, index) => (
            <Box
              border={2}
              boxShadow={10}
              sx={{
                height: 500,
                display: 'block',
                maxWidth: '100%',
                overflow: 'hidden',
                width: '100%',
                boxShadow: '86px',
              }}
            >
              <img
                style={{ width: '100%', height: '100%' }}
                src={`/images/${_id + index}.jpg`}
                alt=""
              />
            </Box>
          ))}
        </AutoPlaySwipeableViews>
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
                {singleProduct.item}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                {singleProduct.category}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                &#x20B9;{singleProduct.price}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack direction="column" gap={2}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                Product Detials
              </Typography>
              <TextField
                fullWidth
                id="outlined-name"
                label="Product Name"
                defaultValue={singleProduct.item}
                onChange={(e) => setItem(e.target.value)}
              />
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue={singleProduct.category}
                onChange={(e) => setCategory(e.target.value)}
                helperText="Please select your currency"
              >
                {categories.map((option, index) => (
                  <MenuItem
                    key={option.value}
                    index={singleProduct._id}
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-uncontrolled"
                label="Uncontrolled"
                defaultValue={singleProduct.price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <input type="file" onChange={handleChange} />

              <Button
                variant="contained"
                component="label"
                onClick={updateproduct}
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </Modal>
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
                Mobile : {singleProduct.phone}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                Email : {singleProduct.email}
              </Typography>
              <Typography
                sx={{
                  fontSize: 20,
                  fontFamily: 'bold',
                  margin: 'auto',
                  textAlign: 'center',
                }}
              >
                &#x20B9;{singleProduct.price}
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
                <Link href={`https://wa.me/${singleProduct.phone}`}>
                  <WhatsAppIcon sx={{ fontSize: '35px' }} color="success" />
                </Link>
                <Link href={`tel:${singleProduct.phone}`}>
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
                        image={`/images/${obj._id + 0}.jpg`}
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
