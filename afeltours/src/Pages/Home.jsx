import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero.jpg';
import heroImg2 from '../assets/images/hero2.avif';
import heroVid from '../assets/images/heroVid.mp4';
import worldImg from '../assets/images/world.jpg';
import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';


const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center ">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>AFELTours 
                <span className='highlight'> converging nature & leisure</span> </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt itaque pariatur quia excepturi numquam est rem architecto quaerat, 
                  odio tenetur dolorum optio possimus officiis veniam illo officia obcaecati debitis laboriosam.</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVid} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>
    </section>
    { /* hero start */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we do</h5>
            <h2 className='services__title'>We offer our best service & advice appropriately</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    {/* tour sections start */}
    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore Kenya'} />
            <h2 className='featured__tour-title'>Our Staycation Destinations</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* end of tour section */}

  </>
};

export default Home;