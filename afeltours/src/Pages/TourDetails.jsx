import React from 'react';
import '../styles/tour-details.css';
import { Container, Col, Row, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tours from '../assets/data/tours';
import calculateAvgRating from '../utilis/avgRating';


const TourDetails = ()  => {

  const {id} = useParams();

  // static data 
  // later call our API & load data from DB

  const tour = tours.find(tour => tour.id === id)

  // destructure properties from tour object

  const { title, photo, price, city, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <>
    <section>
      <Container>
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
                    {calculateAvgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span><i class="ri-map-pin-2-line"></i>{city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i> Ksh{price} / per person sharing</span>\
                  <span><i class="ri-map-pin-2-line"></i>{city}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default TourDetails;
