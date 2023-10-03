import React, {useRef} from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from "reactstrap";

import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const areaRef = useRef('');
    const locationRef = useRef('');
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();


    const searchHandler = async () => {
        
        const area = areaRef.current.value
        const location = locationRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(area==='' || location==='' || maxGroupSize=== ''){
            return alert('All fields are required!!')
        }

        const res = await fetch(`http://localhost:4000/api/v1/tours/search/getTourBySearch?title=${area}&city=${location}&maxGroupSize=${maxGroupSize}`);

        if(!res.ok) alert('Something went wrong');

        const result = await res.json();

        navigate(`/tours/search/getTourBySearch?title=${area}&city=${location}&maxGroupSize=${maxGroupSize}`,
         { state: result.data }
         );
    };


  return (
    <Col lg='12'>
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
        <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                    <i class="ri-map-pin-line"></i>
                </span>
                <div>
                    <h6>Location</h6>
                    <input type="text" placeholder='Which area you going?' ref={areaRef}/>  
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                    <i class="ri-map-pin-line"></i>
                </span>
                <div>
                    <h6>Resort/Villa</h6>
                    <input type="text" placeholder='Which resort/villa?' ref={locationRef}/>
                </div>
            </FormGroup>
           
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span>
                    <i class="ri-group-line"></i>
                </span>
                <div>
                    <h6>max People</h6>
                    <input type="number" placeholder='0' ref={maxGroupSizeRef}/>
                </div>
            </FormGroup>

            <span className='search__icon' type='submit' onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>
  </Col>
  ) 
}

export default SearchBar;