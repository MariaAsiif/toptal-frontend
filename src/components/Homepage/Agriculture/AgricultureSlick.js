import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import agri1 from '../../../assets/agri1.jpg';
import agri2 from '../../../assets/agri2.jpg';
import agri3 from '../../../assets/agri3.jpg';
import agri4 from '../../../assets/agri4.jpg';
import agri5 from '../../../assets/agri5.jpg';
import { AgricultureImg, AgricultureImg1, AgricultureImgContainer1, AgricultureMiniImg, SlickMainContainer } from './StyledAgriculture';

const AgricultureSlick = () => {
  const agriImgs2 = [agri1, agri2, agri3, agri4, agri5]
  var settings = {
    dots: false,
    arrows: true,
   
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
         
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }
    ]
  };
  return (
    <SlickMainContainer>
      <Slider {...settings} className='responsive-slick'>
        {
          agriImgs2.map((img, index) => (
            <AgricultureImgContainer1 key={index}>
              <div className="overlay">
              </div>
              <div className='inner-overlay'>
                <h3>TITLE HERE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>

              </div>
              <AgricultureMiniImg className='img-fluid' src={img} alt={img} />
            </AgricultureImgContainer1>
          ))
        }


      </Slider>
    </SlickMainContainer>
  )
}

export default AgricultureSlick