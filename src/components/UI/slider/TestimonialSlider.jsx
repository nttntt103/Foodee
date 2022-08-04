import React from 'react'
import Slider from "react-slick";

import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'

import '../../../styles/slider.css'

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSilde: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <Slider {...settings}>
        <div>
            <p className="review__text">
                "We are so fortunate to have this place just a few minutes drive away from home. 
                Food is stunning, both the tapas and downstairs restaurant."
            </p>

            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava01} alt="avatar" className='rounded'/>
                <h6>John Doe</h6>
            </div>
        </div>

        <div>
            <p className="review__text">
            "Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. 
            You should skip several meals before ordering foods from this amazing restaurant."
            </p>

            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava02} alt="avatar" className='rounded'/>
                <h6>Mitchell Marsh</h6>
            </div>
        </div>

        <div>
            <p className="review__text">
            "Delicious food, shippers are very attentive. 
            Plus it's all at an affordable price. Can totally recommend it and will definitely come back again."
            </p>

            <div className='slider__content d-flex align-items-center gap-3'>
                <img src={ava03} alt="avatar" className='rounded'/>
                <h6>Steven Crock</h6>
            </div>
        </div>
    </Slider>
  )
}

export default TestimonialSlider
