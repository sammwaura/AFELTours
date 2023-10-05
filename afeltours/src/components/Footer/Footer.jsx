import React from 'react';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import 'react-remixicon';

const quick__links = [
  {
    path:'/home',
    display:'Staycations'
  },
  {
    path: '/about',
    display:'Hikes'
  },
  {
    path:'/tours',
    display:'Ecotours'
  },
];

const quick__links2 = [
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path: '/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },
];



const Footer = () => {

  const year  = new Date().getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo">
              <img src={ logo } alt="" />
              <p>AFEL stands for African Forests Escapade Limited. 
                  We are a limited company registered in Kenya to
                  promote eco-tourism and conservation of nature. The headquarters are in Nairobi, Colours house,
                   Ruaraka, off Outering Road.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-youtube-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-tiktok-fill"></i></Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                        <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>   
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item,index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'>
                        <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>   
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className='footer__link-title'>Contacts</h5>
            <ListGroup className='footer__quick-links'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-map-pin-line"></i></span>
                      Address:
                    </h6>
                    <p className='mb-0'>Outering Road, Nairobi, Kenya</p>
                  </ListGroupItem> 
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className='mb-0'>info@africanforestsescapade.com</p>
                  </ListGroupItem>   
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>

                    <h6 className='mb-0 d-flex align-items-center gap-2'>
                      <span><i class="ri-phone-fill"></i></span>
                      Phone:
                    </h6>
                    <p className='mb-0'>0727 451541</p>
                    </ListGroupItem>             
            </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
            <p className="copyright">Copyright {year},
             design and developed by AFELTours IT Department. All Rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
  
};

export default Footer;