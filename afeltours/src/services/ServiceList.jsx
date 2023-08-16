import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/team.png'
import guideImg from '../assets/images/hike.png'
import customizationImg  from '../assets/images/stayca.png'


const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Corporate Events",
        desc: 'This includes; team building, workshop conferences, end of year parties'
    },
    {
        imgUrl: guideImg,
        title: "Hiking",
        desc: 'We have hike escapades once every month to hills and mountains in East Africa.'
    },
    {
        imgUrl: customizationImg,
        title: "Staycations",
        desc: 'Holiday at home away from home any place in Kenya and even abroad'
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