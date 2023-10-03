import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/team.png'
import guideImg from '../assets/images/hike.png'
import customizationImg  from '../assets/images/stayca.png'


const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Resort Staycations",
        desc: 'This is being our main service, we are committed to seeing our clients, both citizens & non-citizen staycate to resorts & villas that we have contracts with'
    },
    {
        imgUrl: guideImg,
        title: "Safari EcoTours & Hikes",
        desc: 'We have safari ecotours & hike escapades once every month to hills and mountains in East Africa.'
    },
    {
        imgUrl: customizationImg,
        title: "Corporate Events",
        desc: 'The package include custom made conferences, team building, end year parties and cocktails. The packages could be client proposed or AFEL recommended destinations/ facilities.'
    },
]

const ServiceList = () => {
  return  <>
  {
    servicesData.map((item,index) => 
    <Col lg='3' key={index}>
      <ServiceCard item = {item} />
    </Col>
    )}
  </>
  
}

export default ServiceList;