import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel, Row, Col, Button } from "react-bootstrap";
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
            <div style={{overflowX:"hidden"}}>
                <br/>
                <Row>
                    <Col xs={12}>
                        {details.cardImageUrl && <img src={details.cardImageUrl} className="img-responsive" />}
                        <Panel>
                            
                            <div style={{padding:10}}>
                                <Button bsStyle="primary" style={{ width: "100%" }}>Join Race</Button>
                                <RaceSummary {...details} />
                                <hr />
                                <br />
                                <div>
                                    {details.description}
                                </div>
                            </div>
                        </Panel>

                    </Col>
                </Row>

                
                <FormJoinRace categories={details.categories} />
            </div>
        );
    }
}

RacePage.propTypes = {
    metadataUrl: PropTypes.string
}


export default RacePage;