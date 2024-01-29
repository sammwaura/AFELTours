import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import staycationImg from '../assets/images/staya.jpg'
import guideImg from '../assets/images/maraaaaa.jpg'
import corporateImg  from '../assets/images/corporate.jpeg'


const servicesData = [
    {
        imgUrl: staycationImg,
        title: "Resort Staycations",
        desc: 'This is being our main service, we are committed to seeing our clients, both citizens & non-citizen staycate to resorts & villas that we have contracts with'
    },
    {
        imgUrl: guideImg,
        title: "Safari EcoTours & Hikes",
        desc: 'We have safari ecotours & hike escapades once every month to hills and mountains in East Africa.'
    },
    {
        imgUrl: corporateImg,
        title: "Corporate Events",
        desc: 'The package include custom made conferences, team building, end year parties and cocktails. The packages could be client proposed or AFEL recommended destinations/ facilities.'
    },
]

const ServiceList = () => {
  return  <>
  {
    servicesData.map((item,index) => 
    <Col lg='3'md='6' sm='12' className='mb-4' key={index}>
      <ServiceCard item = {item} />
    </Col>
    )}
  </>
  
}

export default ServiceList;