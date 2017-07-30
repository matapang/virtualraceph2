import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextInfo from '../TextInfo';
import { Row, Col, Card, Avatar } from 'antd';
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
                <Card>
                    <Row type="flex" gutter={16}>
                            <Avatar icon="user" shape="square" size="large" />                        
                            <div>
                                <h2>{name}</h2>
                                <span>
                                    <TextInfo>{id}</TextInfo>
                                    &nbsp;&nbsp;&nbsp;
                                    <AppLink to="/submit-run"> Following  <b>0</b></AppLink> | Followers <b>0</b>
                                </span>
                            </div>
                    </Row>
                    <Row gutter={10}>
                        <Col xs={12}> <Link to="/submit-run"><Button type="primary" > Submit Run</Button></Link></Col>
                        <Col xs={12}><Button > Logs </Button></Col>
                    </Row>


                </Card>
                <RunSummary distance={distance} pace={pace} runs={runs} />
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
