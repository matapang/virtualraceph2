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
        const { name, distance, pace, runs, email, profileImageUrl } = this.props;
        return (
            <div>
                <Panel>

                    <Row >
                        <Col xs={12}>
                            <Media>
                                <Media.Left>
                                    <img width={80} height={80} src={profileImageUrl} alt="No Profile Photo" />
                                </Media.Left>
                                <Media.Body>
                                    <Media.Heading>{name}
                                        <div className="pull-right hidden-sm">
                                            <i className="fa fa-2x fa-star-half-o" />
                                        </div>
                                    </Media.Heading>
                                    <TextInfo>{email}</TextInfo>
                                </Media.Body>
                            </Media>
                        </Col>
                    </Row>
                    <br />
                    {/*<Row>
                        <Col xs={12} md={6}> <Link to="/submit-run"><Button bsStyle="primary"> Submit Run</Button></Link></Col>
                        <Col xs={12} md={6}><Button > Logs </Button></Col>
                    </Row>*/}
                </Panel>
            </div>
        )
    }
}

CardProfile.defaultProps = {
    name: 'Anthony Wong',
    email: '-',
    profileImageUrl: '-'
}

CardProfile.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    profileImageUrl: PropTypes.string,
};

export default CardProfile;
