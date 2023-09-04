import React, { useState} from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap';

import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {

    const {price, reviews} = tour;
    const navigate =  useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01', //later dynamic
        userEmail: 'info@africanforestsescapade.com',
        fullName: '',
        phone:'',
        guestSize: 1,
        bookAt: ''

    });

    const handleChange = e => {
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const serviceFee = 1000
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)


    // send data to the server

    const handleClick = e=>{
        e.preventDefault()

    navigate("/thank-you");
    }

  return (
    <div className='booking'>
        <div className="booking__top d-flex align-items-center justify-content-between">
            <h3>
            Kes{price} <span>/PPS</span>
            </h3>
          <span className='tour_rating d-flex align-items-center'>
                    <i class='ri-star-s-fill' 
                    style={{ color:'var(--secondary-color)' }}>
                    </i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                  
            </span>
        </div>

    {/*booking form starts  */}
    <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
            <FormGroup>
                <input type="text" placeholder='Full name' id="fullName" 
                required onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <input type="number" placeholder='Phone' id="phone" 
                required onChange={handleChange} />
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id="bookAt" 
                required onChange={handleChange} />
                <input type="number" placeholder='Guest' id="guestSize" 
                required onChange={handleChange} />
            </FormGroup>
        </Form>
    </div>
    {/* booking form ends */}

    {/* booking bottom */}
    <div className="booking__bottom">
        <ListGroup>
            <ListGroupItem className='border-0 px-0'>
                <h5 className='d-flex align-items-center gap-1'>KES{price} <i class='ri-close-line'></i>1 Person</h5>
                <span>{price}</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0'>
                <h5>Service Charge</h5>
                <span>KES 1000/-</span>
            </ListGroupItem>
            <ListGroupItem className='border-0 px-0 total'>
                <h5>Total</h5>
                <span> KES{totalAmount}</span>
            </ListGroupItem>
        </ListGroup>

        <Button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Enquire Now</Button>
    </div>
        
    </div>
  )
 
  
}

export default Booking;