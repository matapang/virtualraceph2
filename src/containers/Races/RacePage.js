import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Button } from 'antd'
import FormJoinRace from '../../components/FormJoinRace';
import RaceSummary from '../../components/RaceSummary';
import http from '../../libs/http';

class RacePage extends Component {
    state = {
        details: {}
    }

    async componentDidMount() {
        let response = await http.get(this.props.metadataUrl);
        this.setState({
            details: response.data
        });
    }

    render() {
        const { details } = this.state;
        return (
            <div>
                <Row>
                    <Col xs={24} sm={18}>
                        <Card bodyStyle={{ padding: 0 }}>
                            {details.cardImageUrl && <img src={details.cardImageUrl} className="img-responsive" />}
                            <div style={{padding:10}}>
                                <Button type="primary" style={{ width: "100%" }}>Join Race</Button>
                                <RaceSummary {...details} />
                                <hr />
                                <br />
                                <div>
                                    {details.description}
                                </div>
                            </div>
                        </Card>

                        <FormJoinRace categories={details.categories} />
                    </Col>
                </Row>
            </div>
        );
    }
}

RacePage.propTypes = {
    metadataUrl: PropTypes.string
}


export default RacePage;