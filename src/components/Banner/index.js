import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const H1 =  styled.h1`
    font-size:4rem;
    line-height:1
`;

const Banner = () => {
    return (
        <div >
          <H1>RUN.
              <br/> 
              RACE.
              <br/>
              HELP TOGETHER
              <br/>

          </H1>
        </div>
    )
}

export default Banner;