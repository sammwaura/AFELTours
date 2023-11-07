import React, { useEffect, useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Col, Row, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utilis/avgRating';
import avatar from "../assets/images/ava1.jpg";
import Booking from '../components/Booking/Booking';
import Newsletter from '../shared/Newsletter';

import { AuthContext } from './../context/AuthContext';
import { useContext } from 'react';

import useFetch from '../hooks/useFetch';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const [tour, setTour] = useState(null); //initialize the tour state

  // fetch data from DB
  const { data: tourData, loading, error } = useFetch(`http://localhost:4000/api/v1/tours/${id}`);

  

  useEffect(() => {
    async function fetchTour() {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/tours/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP ERROR! Status: ${response.status}`);
        }
        const tourData = await response.json();
        setTour(tourData); //set tour data in the state
      } catch (error) {
        console.log(error);
      }
    }

    fetchTour();
  }, [id]);
  if (loading) {
    return <h4 className='text-center pt-5'>Loading...</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  if (!tourData) {
    return null; 
  }

  const { title, photo, desc, price, city, reviews, maxGroupSize } = tourData;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert('Please sign in');
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`http://localhost:4000/api/v1/review/${id}`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      if(!res.ok){
        //check for non-2xx status codes(404)
        const errorMessage = await res.text();
        console.error(`Failed to submit review. StatusCode: ${res.status}, Error: ${errorMessage}`);
      } else {
        const result = await res.json();
        alert(result.message);
      }
    } catch (err){
      console.error('Network error:', err)
    }
  }

  //format date
  const options = {day:'numeric', month:'long', year:'numeric'}

  return (
    <>
    <section>
      <Container>
        {!tourData && loading && <h4 className='text-center pt-5'>Loading...</h4>}
        {!tourData && error && <h4>{error}</h4>}
        {tourData && (
        <Row>
        <Col lg='8'>
          <div className='tour__content'>
            <img src={photo} alt=""  />
  
            <div className='tour__info'>
              <h2>{title}</h2>
  
              <div className='d-flex align-items-center gap-5'>
                <span className='tour_rating d-flex align-items-center gap-1'>
                  <i class='ri-star-s-fill' 
                  style={{ color:'var(--secondary-color)' }}>
                  </i>
                  {avgRating === 0 ? null : avgRating}
                  {totalRating === 0 ? (
                    "Not rated"
                  ) : (
                    <span>({reviews?.length})</span>
                  )}
                </span>
              </div>
  
              <div className="tour__extra-details">
                <span><i class="ri-map-pin-2-line"></i>{city}</span>
                <span><i class="ri-money-dollar-circle-line"></i> Ksh {price} / PPS </span>
                <span><i class="ri-group-line"></i>group of {maxGroupSize}</span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
  
            {/* tour reviews section */}
            <div className="tour__reviews mt-4">
              <h4>Reviews({reviews?.length} reviews)</h4>
  
              <Form onSubmit={submitHandler}>
                <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                  <span onClick={() => setTourRating(1)}><i class="ri-star-s-fill"></i></span>
                  <span onClick={() => setTourRating(2)}><i class="ri-star-s-fill"></i></span>
                  <span onClick={() => setTourRating(3)}><i class="ri-star-s-fill"></i></span>
                  <span onClick={() => setTourRating(4)}><i class="ri-star-s-fill"></i></span>
                  <span onClick={() => setTourRating(5)}><i class="ri-star-s-fill"></i></span>
                </div>

                <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' />
                  <button className="btn primary__btn text-white" type='submit'>
                    submit
                  </button>
                </div>
              </Form>
  
              <ListGroup className='user__reviews'>
                {
                  reviews?.map(review=>(
                    <div className="review__item">
                      <img src={avatar} alt="" />
  
                      <div className="w-100">
                        <div className='d-flex align-items-center justify-content-between'>
                          <div>
                            <h5>{review.username}</h5>
                            <p>{new Date(review.createdAt).toLocaleDateString('en-US', options
                            )}</p>
                          </div>
                          <span className='d-flex align-items-center'>
                            {review.rating} <i class="ri-stars-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                      </div>
                    </div>
                  ))
                }
  
              </ListGroup>
  
            </div>
            {/* tour reviews section ends */}
          </div>
        </Col>
  
        <Col lg="4">
            <Booking tour={tourData} avgRating={avgRating}/>
        </Col>
      </Row>
       )}
      </Container>
    </section>
    <Newsletter />
    </>
  );
};
export default TourDetails;
