import axios from 'axios';
import React from 'react';
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

function View() {
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
    <div>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={`/images/${singleData._id}.jpg`} alt="" />
        </div>
        <div className="rightSection">
          {admin ? (
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
          ) : (
            ''
          )}
          <Grid container direction="column" bgcolor="" padding="0px" gap={5}>
            <Grid
              sx={{
                backgroundColor: '',
                border: 2,
                padding: 0,
                boxShadow: 10,
                // width: '80%',
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
                    border: 2,
                    marginTop: '-10px',
                    marginLeft: '-10px',
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

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Stack direction="column" gap={2}>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    component="h2"
                  >
                    Product Detials
                  </Typography>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Product Name"
                    defaultValue={singleData.item}
                    onChange={(e) => setItem(e.target.value)}
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue={singleData.category}
                    onChange={(e) => setCategory(e.target.value)}
                    helperText="Please select your currency"
                  >
                    {categories.map((option, index) => (
                      <MenuItem
                        key={option.value}
                        index={singleData._id}
                        value={option.value}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                    defaultValue={singleData.price}
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
              alignItems="center"
              justifyContent="center"
              sx={{
                backgroundColor: '',
                border: 2,
                padding: 0,
                boxShadow: 10,
                // width: '80%',
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
                    marginTop: '-10px',
                    marginLeft: '-10px',
                    // marginRight: '-10px',
                  }}
                >
                  Seller Detials
                </Typography>
              </Grid>
              <Grid marginTop="4px">
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: 'bold',
                    margin: 'auto',
                    textAlign: 'center',
                  }}
                >
                  Name : {singleData.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 20,
                    fontFamily: 'bold',
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
        </div>
      </div>

      <Grid container spacing={1} backgroundColor="red" width="100%">
        <Grid>
          <Grid
            container
            spacing={1}
            sx={{ padding: 10 }}
            // direction="row"
            alignItems="center"
            justifyContent="center"
          >
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
            {sameData.map((obj) => (
              <Grid item xs={4} sm={4} md={2} lg={1.5} xl={1.5}>
                <Card backgroundColor="black">
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
        </Grid>
      </Grid>
    </div>
  );
}
export default View;
