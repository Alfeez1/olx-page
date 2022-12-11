import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';
function Banner() {
  return (
    <Carousel
      howArrows={true}
      useKeyboardArrows
      autoPlay
      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
    >
      <div style={{ height: '600px' }}>
        <img
          style={{ objectFit: 'fill' }}
          alt="A"
          src="https://images.unsplash.com/photo-1546502208-81d149d52bd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
        />

        {/* <p className="legend">hello</p> */}
      </div>
      <div style={{ height: '600px' }}>
        <img
          style={{ objectFit: 'fill' }}
          alt="A"
          src="https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        {/* <p className="legend">helselo</p> */}
      </div>
      <div style={{ height: '600px' }}>
        <img
          style={{ objectFit: 'fill' }}
          alt="A"
          src="https://media.istockphoto.com/id/1393588419/photo/beautiful-smiling-woman-buying-products-in-supermarket.jpg?s=170667a&w=0&k=20&c=vtNc0VFqpHBjG60tsHnlu1Ljsp1rj9DRbe83oWxjd7o="
        />
        {/* <p className="legend">hello</p> */}
      </div>
      <div style={{ height: '600px' }}>
        <img
          style={{ objectFit: 'fill' }}
          alt="A"
          src="https://images.unsplash.com/photo-1528952686551-542043782ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        />
        {/* <p className="legend">helselo</p> */}
      </div>
    </Carousel>
  );
}

export default Banner;
