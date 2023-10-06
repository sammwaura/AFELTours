import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/africa.jpg';
import heroImg2 from '../assets/images/staya.jpg';
import heroVid from '../assets/images/heroVid.mp4';
import worldImg from '../assets/images/world.jpg';
import Subtitle from '../shared/Subtitle';
import experienceImg from '../assets/images/experience.jpg';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

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
                <p>AFEL stands for African Forests Escapade Limited. 
                  We are a limited company registered in Kenya to
                  promote eco-tourism and conservation of nature. The headquarters are in Nairobi, Colours house,
                   Ruaraka, off Outering Road. We are a safari hub specializing on African woodlands ecotours. 
                  We offer services that include booking safaris, corporates events, forest ecotours, 
                  mountain climbing expeditions and visit to cultural centres.
                </p>
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
            <h2 className='services__title'>We offer top notch services</h2>
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
            <h2 className='featured__tour-title'>Our Popular Destinations</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    {/* end of tour section */}
    {/* experience section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={"Experience"} />
                <h2>With our experience <br /> we are committed to serve you </h2>
                <p>We exist to help you realize your dreams holiday, corporate events, and other outdoor activities in serene environment. 
                  We believe our clients deserves careful planning of your holiday/ events based on your resources and dedicated time. 
                  Working with you one-on-one, you will find a reliable and passionate tour operator capable of taking charge of your corporate events, 
                  African woodland’s safari, and travel arrangements within your preferred budget range.
                </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>1200</span>
                <h6>Resort Staycations</h6>
              </div>
              <div className="counter__box">
                <span>1000</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>200</span>
                <h6>Corporate Events</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    {/* experience section ends */}

    {/* gallery section starts */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>Our Gallery</h2>
          </Col>
          <Col lg='12'>
          <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    {/* gallery section ends */}

    {/* testimonials start */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Our Clients Testimonials'} />
            <h2 className='testimonial__title'>What our Clients say about us</h2> 
          </Col>
          <Col lg='12'>
            <Testimonials />
          </Col>
        </Row>
      </Container>
    </section>
    {/* testimonials end */}
    <Newsletter/>

  </>
};

export default Home;