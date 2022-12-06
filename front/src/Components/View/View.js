import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import {
  Box,
  Button,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from 'react-router-dom';
import './View.css';

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

  const { id } = useParams('');
  console.log(id);
  const getProduct = async () => {
    await axios
      .get(`http://localhost:8000/getproduct/${id}`)
      .then((response) => {
        const itemdata = response.data;
        setSingleData(itemdata);
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

  useEffect(() => {
    getProduct();
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
            <Stack spacing={1} direction="row" style={{ margin: 5 }}>
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
          <div className="productDetails">
            <p> {singleData.item} </p>
            <span>&#x20B9; {singleData.price}</span>
            <p>{singleData.category}</p>
            <span>{singleData.createdAt}</span>
          </div>
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
          <div className="contactDetails">
            <p>Seller details</p>
            <p>No name</p>
            <p>1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default View;
