import React, { Component, PropTypes } from 'react';
import {Col, Row} from 'antd';
import styled from 'styled-components';

const Wrapper = styled(Row)`
    background:#fafafa;
    padding:20px;
`;

class RunSummary extends Component {
    render() {
        const {distance, pace, runs} = this.props;
        return (
            <Wrapper>
                <Col xs={8}>
                    <label><b>Distance (km)</b></label>
                    <div>
                        {distance}
                    </div>
                </Col>
                <Col xs={8}>
                    <label><b>Pace</b></label>
                    <div>
                        {pace}
                    </div>
                </Col>
                <Col xs={8}>
                    <label><b># of Runs</b></label>
                    <div>
                        {runs}
                    </div>
                </Col>
            </Wrapper>
        );
    }
}

RunSummary.propTypes = {
    distance:PropTypes.number,
    pace:PropTypes.string,
    runs:PropTypes.number,
};

export default RunSummary;