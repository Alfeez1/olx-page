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
            const petList = newProduct.filter((c) => c.category === 'Pets');
            setPets(petList);
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
    getdata();
  }, []);

  let price = newProduct.sort((a, b) => b.price - a.price);
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {newProduct?.map((obj, key) => (
            <a key={obj._id} href={`/product/${obj._id}`}>
              <div className="card">
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={`/images/${obj._id}.jpg`} alt={obj.item} />
                </div>
                <div className="content">
                  <p className="rate">{obj.item}</p>
                  <span className="kilometer">{obj.price}</span>
                  <p className="name"> {obj.category}</p>
                </div>
                <div className="date">
                  <span>{obj.createdAt}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Sorted on Price</span>
        </div>
        <div className="cards">
          {price.map((obj, key) => (
            <div key={obj._id} className="card">
              <a key={obj._id} href={`/product/${obj._id}`}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={`/images/${obj._id}.jpg`} alt="" />
                </div>
                <div className="content">
                  <p className="rate">{obj.item}</p>
                  <span className="kilometer">&#x20B9; {obj.price}</span>
                  <p className="name">{obj.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Bikes And Cars</span>
        </div>
        <div className="cards">
          {bikes.map((obj, key) => (
            <div key={obj._id} className="card">
              <a key={obj._id} href={`/product/${obj._id}`}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={`/images/${obj._id}.jpg`} alt="" />
                </div>
                <div className="content">
                  <p className="rate">{obj.item}</p>
                  <span className="kilometer">&#x20B9; {obj.price}</span>
                  <p className="name">{obj.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Pets</span>
        </div>
        <div className="cards">
          {pets.map((obj, key) => (
            <div key={obj._id} className="card">
              <a key={obj._id} href={`/product/${obj._id}`}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={`/images/${obj._id}.jpg`} alt="" />
                </div>
                <div className="content">
                  <p className="rate">{obj.item}</p>
                  <span className="kilometer">&#x20B9; {obj.price}</span>
                  <p className="name">{obj.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Mobile Accessories</span>
        </div>
        <div className="cards">
          {mobile.map((obj) => (
            <div className="card">
              <a key={obj._id} href={`/product/${obj._id}`}>
                <div className="favorite">
                  <Heart></Heart>
                </div>
                <div className="image">
                  <img src={`/images/${obj._id}.jpg`} alt="" />
                </div>
                <div className="content">
                  <p className="rate">{obj.item}</p>
                  <span className="kilometer">&#x20B9; {obj.price}</span>
                  <p className="name">{obj.category}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;
