import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './View.css';
function View() {
  const [singleData, setSingleData] = useState([]);
  const { id } = useParams('');
  console.log(id);
  const getProduct = async () => {
    await axios
      .get(`http://localhost:8000/getproduct/${id}`)
      .then((response) => {
        const itemdata = response.data;
        console.log(itemdata);
        setSingleData(itemdata);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(singleData);
    getProduct();
  }, []);

  return (
    <div>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={`/images/${singleData._id}.jpg`} alt="" />
        </div>

        <div className="rightSection">
          <div className="productDetails">
            <p> {singleData.item} </p>
            <span>&#x20B9; {singleData.price}</span>
            <p>{singleData.category}</p>
            <span>{singleData.createdAt}</span>
          </div>
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
