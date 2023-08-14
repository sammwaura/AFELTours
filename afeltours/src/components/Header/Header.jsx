import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import {Navlink, Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
 
const nav_links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path: '#',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
]

const Header = () => {
  return <header className='header'>
    <Container>
      <Row>
        <div className='nav_wrapper d-flex align-items-center justify-content-between'>
          {/* logo */}
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
        </div>
      </Row>
      </Container>
  </header>
};

export default Header;