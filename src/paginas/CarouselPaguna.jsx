import { Breadcrumb } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'antd';

const CarouselPaguna = () => {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center', 
        background: '#364d79'
      };
  return (
    <>
     <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Carousel',
      },
    ]} />
    <h1>Carousel</h1>
    <Carousel arrows infinite={false}>
      <div>
        <img src="https://www.tamila.cl/img/slide_5.jpg" alt="" />
      </div>
      <div>
       <img src="https://www.cesarcancino.com/wp-content/themes/cesarcancino/assets/img/slide_11.jpg" alt="" />
      </div>
      <div>
        <img src="https://www.tamila.cl/img/slide_10.jpg" alt="" />
      </div> 
    </Carousel>
    </>
  )
}

export default CarouselPaguna