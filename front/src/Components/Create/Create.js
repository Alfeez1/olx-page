import React from 'react';
import './Create.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('item', item);
    formData.append('price', price);
    formData.append('category', category);

    // const productData = { item, category, price };
    console.log(formData);
    axios
      .post('http://localhost:8000/product', formData)
      .then((res) => {
        console.log(res);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="divclass">
        <div className="centerDiv" style={{ margin: 'auto', marginBottom: 90 }}>
          <form>
            <label htmlFor="fname">Product Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              // defaultValue="John"
              onChange={(e) => setItem(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="fname">Category </label>
            <select
              name="cars"
              id="cars"
              style={{ marginLeft: 20, width: 150 }}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Bikes & Cars">Bikes & Cars</option>
              <option value="Mobile Accessories">Mobile Accessories</option>
              <option value="Computer & Laptops">Computer & Laptops</option>
              <option value="Pets">Pets</option>
            </select>
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
          </form>
          <br />

          <form encType="multipart/form-data">
            {/* <img
              alt="posts"
              width="200px"
              height="200px"
              src=""
              onChange={(e) => setImage(e.target.files[0])}
            ></img> */}
            <input type="file" onChange={handleChange} />
            <br />
            <button onClick={onFormSubmit} className="uploadBtn">
              upload and Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Create;
