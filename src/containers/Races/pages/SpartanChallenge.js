import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd'
import FormJoinRace from '../../../components/FormJoinRace';

class SpartanChallenge extends Component {
    componentDidMount() {
        fetch("/metadata/races/spartan-challenge.json", {method:'GET'}).then(r => {
            console.log(r);
        })
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={24} sm={18}>
                        <Card title="Spartan Challenge">
                            <Button type="primary" style={{ width: "100%" }}>Join Race</Button>
                            <div>
                                Countdown goes here
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cum excepturi, deleniti
                                at maiores incidunt similique in sunt quo et. Maxime quo rem, laborum fuga aliquam in excepturi ipsa sit.
                             </div>
                        </Card>

                        <FormJoinRace />
                    </Col>
                </Row>
            </div>
        );
    }
}


export default SpartanChallenge;