import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message, Input, InputNumber, Button, Checkbox, Row, Col } from 'antd';
import {
    Form,
    FormGroup,
    FormControl,
    ControlLabel,
    HelpBlock
} from 'react-bootstrap';
import FormWrapper from '../../components/FormWrapper';
import FormItem from '../../components/FormItem';
import UploadPhoto from '../../components/UploadPhoto';

import LoaderButton from '../../components/LoaderButton';

class FormSubmitRun extends Component {

    state = {
        distance: 0,
        minutes:0,
        seconds:0,
        notes:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state);
        }
    }

    handleChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleUploadPhoto = () => {

    }

    render() {
        const imageUrl = "";
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormWrapper bordered>
                    <Row>
                        <Col xs={8}>
                            <FormItem label="Upload Photo">
                                <UploadPhoto />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            <FormGroup controlId="distance">
                                <ControlLabel>Distance (km)</ControlLabel>
                                <FormControl type="number" min={0} value={this.state.distance} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row gutter={5}>
                        <Col xs={8}>
                            <FormGroup controlId="hour">
                                <ControlLabel>Hour</ControlLabel>
                                <FormControl type="number" min={0} value={this.state.hour} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={8}>
                            <FormGroup controlId="minutes">
                                <ControlLabel>Minutes</ControlLabel>
                                <FormControl type="number" min={0} max={59} value={this.state.minutes} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={8}>
                            <FormGroup controlId="seconds">
                                <ControlLabel>Seconds</ControlLabel>
                                <FormControl type="number" min={0} max={59} value={this.state.seconds} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row gutter={5}>
                        <Col xs={24}>
                            <FormGroup controlId="notes">
                                <ControlLabel>Notes</ControlLabel>
                                <FormControl componentClass="textarea" rows={3} value={this.state.notes} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <br />

                   <Button type="primary" htmlType="submit" > Submit Run</Button>
                </FormWrapper>
            </Form>
        )
    }
}

FormSubmitRun.propTypes = {
    onSubmit: PropTypes.func
}

export default FormSubmitRun;