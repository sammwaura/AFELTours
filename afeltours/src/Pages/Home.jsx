import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero.jpg';
import heroImg2 from '../assets/images/hero2.avif';
import heroVid from '../assets/images/heroVid.mp4';
import worldImg from '../assets/images/world.jpg';
import Subtitle from '../shared/Subtitle';
import experienceImg from '../assets/images/experience.jpg';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
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
    {/* experience section start */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={"Experience"} />
                <h2>With all our experience <br /> we are committed to serve you </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Facere laborum, placeat minima rem earum deleniti nulla iure, 
                   odio officiis quaerat veniam asperiores commodi laboriosam sapiente. 
                   Quam odio quis minus aut.
                </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful Trips</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>2+</span>
                <h6>Years of experience</h6>
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

  </>
};

export default Home;