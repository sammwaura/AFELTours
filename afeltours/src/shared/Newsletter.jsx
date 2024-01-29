import React from 'react';
import './newsletter.css';
import { Container, Col, Row } from 'reactstrap';
import Tourist from '../assets/images/tourist.jpg';


const Newsletter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subscribe now to get useful travelling information</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='enter your email' />
                        <button className='btn newsletter__btn'>Subscribe</button>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus totam adipisci nemo nesciunt consectetur inventore assumenda, dolorum et. 
                        Praesentium nisi ipsum culpa incidunt, aliquid perspiciatis quasi eveniet molestias quibusdam voluptatum!
                    </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={Tourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter;