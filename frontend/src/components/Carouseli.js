import React from 'react'
import {Carousel}from 'react-bootstrap'


 const Carouseli = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://rppoojaghar.com/wp-content/uploads/2016/06/Banner.jpg"
            alt="First slide"
            height="400"
          />
          <Carousel.Caption>
            <h3>Pooja Items</h3>
            <p>Get Pooja Items online</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0325/4442/4068/files/banner_2_580x.png?v=1600751460"
            alt="Second slide"
            height="400"
          />
      
          <Carousel.Caption>
            <h3>One Stop Pooja Items </h3>
            <p>Wide Range of Pooja Items</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0257/4086/9686/files/Anaraghyaa-banners-puja-items-buy-online_480x480.jpg?v=1576675608"
            alt="Third slide"
            height="400"
          />
      
          <Carousel.Caption>
            <h3>Order Online</h3>
            <p>"Wide Range of pooja Articles Available"</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
export default Carouseli;