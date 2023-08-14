import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero.jpg';
import heroImg2 from '../assets/images/hero2.avif';
import heroVid from '../assets/images/heroVid.mp4';
import worldImg from '../assets/images/world.jpg';
import Subtitle from '../shared/Subtitle';


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
              <h1>Travelling opens the door to creating
                <span className='highlight'> memories</span> </h1>
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
            <div className="hero__img-box">
              <video src={heroVid} alt="" controls/>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    { /* hero start */}
  </>
};

export default Home;