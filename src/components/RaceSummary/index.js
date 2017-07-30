import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TextInfo from '../TextInfo';

const Wrapper = styled.div`
    label {
        margin:0;
    }
`;
const RaceSummary = (props) => {
    const {raceStart, raceEnd, price, categories, cutOff, registration} = props;
    return (
        <Wrapper>
            <div>
                <label>Race Start:</label> {raceStart}
            </div>
            <div>
                <label>Race End:</label> {raceEnd}
            </div>
            <div>
                <label>Price :</label> {price}
            </div>
            <div>
                <label>Categories :</label> {categories}
            </div>
            <div>
                <label>Registration :</label> {registration}
            </div>
        </Wrapper>
    )
}

RaceSummary.propTypes = {
    raceStart:PropTypes.string,
    raceEnd:PropTypes.string,
    price:PropTypes.string,
    categories:PropTypes.string,
    registration:PropTypes.string
};

export default RaceSummary;