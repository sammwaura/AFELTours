import React from 'react';
import Slider from 'react-slick';
import ava1 from '../../assets/images/ava1.jpg';
import ava2 from '../../assets/images/ava2.jpeg';
import ava3 from '../../assets/images/ava3.jpg';
import ava4 from '../../assets/images/ava4.jpg';
import ava5 from '../../assets/images/ava5.jpg';


const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true, 
        autoplaySpeed:2000,
        slideToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slideToScroll: 1,
                    infinte: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slideToScroll: 1,
                },    
            },
        ],
    };
   return (
    <Slider {...settings} >
    <div className='testimonial py-4 px-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti a dolor eaque cumque ducimus in, incidunt voluptas reiciendis, expedita corporis accusantium tempora cum dicta vitae atque quisquam eveniet, 
             modi blanditiis.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava1} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h5 className='mb-0 mt-3'>Kefa Mwaura</h5>
                <p>Director</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti a dolor eaque cumque ducimus in, incidunt voluptas reiciendis, expedita corporis accusantium tempora cum dicta vitae atque quisquam eveniet, 
             modi blanditiis.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava2} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h5 className='mb-0 mt-3'>George</h5>
                <p>Client</p>

            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti a dolor eaque cumque ducimus in, incidunt voluptas reiciendis, expedita corporis accusantium tempora cum dicta vitae atque quisquam eveniet, 
             modi blanditiis.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h5 className='mb-0 mt-3'>Mesh Mwaura</h5>
                <p>Client</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti a dolor eaque cumque ducimus in, incidunt voluptas reiciendis, expedita corporis accusantium tempora cum dicta vitae atque quisquam eveniet, 
             modi blanditiis.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava4} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h5 className='mb-0 mt-3'>Jane Mwaura</h5>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti a dolor eaque cumque ducimus in, incidunt voluptas reiciendis, expedita corporis accusantium tempora cum dicta vitae atque quisquam eveniet, 
             modi blanditiis.
        </p>
        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava5} className="w-25 h-25 rounded-2" alt="" />
            <div>
                <h5 className='mb-0 mt-3'>Ruth</h5>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
   ); 
};

export default Testimonials;