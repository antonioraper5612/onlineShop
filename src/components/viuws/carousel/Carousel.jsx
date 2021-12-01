import React from 'react'
import {Carousel} from 'react-bootstrap';

const CarouselImg = () => {
    return (
      <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 "
          src="https://http2.mlstatic.com/D_NQ_797731-MLA47981753703_102021-OO.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-img"
          src="https://http2.mlstatic.com/D_NQ_960036-MLA47967683788_102021-OO.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_601588-MLA47967683664_102021-OO.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://http2.mlstatic.com/D_NQ_626706-MLA48055673250_102021-OO.webp"
          alt="for slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}

export default CarouselImg
