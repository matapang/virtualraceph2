import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextInfo from '../TextInfo';
import { Panel, Row, Col, Media } from 'react-bootstrap';
import Button from '../Button';
import AppLink from '../AppLink';
import RunSummary from '../RunSummary';
import { Link } from 'react-router-dom';

class CardProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, id, distance, pace, runs } = this.props;
        return (
            <div>
                <Panel>
                    <Row >
                        <Col xs={12}>
                            <Media>
                                <Media.Left>
                                    <img width={80} height={80} src="/assets/thumbnail.png" alt="Image" />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>{name}</Media.Heading>
                                    <TextInfo>{id}</TextInfo>
                                    <AppLink to="/submit-run"> Following  <b>0</b></AppLink> | Followers <b>0</b>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col xs={12} md={6}> <Link to="/submit-run"><Button bsStyle="primary"> Submit Run</Button></Link></Col>
                        <Col xs={12} md={6}><Button > Logs </Button></Col>
                    </Row>
                </Panel>
            </div>
        )
    }
}

CardProfile.defaultProps = {
    name: 'Anthony Wong',
    id: '10132449',
    distance: 100,
    pace: '0-0',
    runs: 10
}

CardProfile.propTypes = {
    name: PropTypes.string,
    id: PropTypes.id,
    distance: PropTypes.number,
    pace: PropTypes.string,
    runs: PropTypes.number
};

export default CardProfile;
