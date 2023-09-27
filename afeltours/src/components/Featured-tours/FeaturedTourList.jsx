import React from 'react';
import TourCard from '../../shared/TourCard';
import { Col } from 'reactstrap';

import useFetch from '../../hooks/useFetch.js';

const FeaturedTourList = () => {  

  const { data: featuredTours, loading, error } = useFetch('http://localhost:4000/api/v1/tours');

  return (
    <>
    { loading && <h4>Loading........</h4> }
    { error && <h4>{error}</h4> }
    {!loading && !error && 
     featuredTours?.map(tour => (
      <Col lg='3' className='mb-4' key={tour._id}>
          <TourCard tour={tour} />
      </Col>
    ))}
  </>
  );
};

export default FeaturedTourList;