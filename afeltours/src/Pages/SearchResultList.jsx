import React, { useState } from 'react';
import CommonSection from './../shared/CommonSection.jsx';
import { Container, Row, Col } from 'reactstrap';
import TourCard from './../shared/TourCard';
import { useLocation } from 'react-router-dom';

const SearchResultList = () => {
  const location = useLocation()
   
  const [ data ] = useState(location.state);
  return <>
  <CommonSection title={'Tour Search Result'} />
  <section>
    <Container>
      <Row>
        {
          data.length ===0 ? <h4> No tour found</h4> : 
          data?.map(tour => (
            <Col lg='3' className='mb-4' key={tour.id}>
              <TourCard tour={tour} />
            </Col>
          ))
        };
      </Row>
    </Container>
  </section>




  </>;
  
}

export default SearchResultList;

