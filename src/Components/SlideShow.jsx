import React from 'react'
import Slider from 'react-slick';
import slide1 from '/slide1.jpg';
import slide2 from '/slide2.jpg';
import slide3 from '/slide3.jpg';
import slide4 from '/slide4.jpg';

const SlideShow = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1

    // };
    return (
        <div className='slideshow'>
            {/* <Slider {...settings}>
                <div>
                    <img src={slide1} alt="img 1" />
                </div>
                <div>
                    <img src={slide2} alt="Image 2" />
                </div>
                <div>
                    <img src={slide3} alt="Image 3" />
                </div>
            </Slider> */}
        </div>
    )
}

export default SlideShow