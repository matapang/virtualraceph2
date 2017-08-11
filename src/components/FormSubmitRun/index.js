import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Button
} from 'react-bootstrap';

import FormWrapper from '../../components/FormWrapper';

import LoaderButton from '../../components/LoaderButton';

class FormSubmitRun extends Component {
    constructor(props) {
        super(props);
        this.file = null;
    }

    state = {
        distance: 0,
        hour: 0,
        minutes: 0,
        seconds: 0,
    }


    validateForm() {
        return this.state.distance > 0 && this.state.minutes > 0;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) {
            let backendModel = {
                distance:parseInt(this.state.distance),
                hour:parseInt(this.state.hour),
                minutes:parseInt(this.state.minutes),
                seconds:parseInt(this.state.seconds)
            }
            console.log(backendModel);
            this.setState({isLoading:true});
            this.props.onSubmit(backendModel, this.file);
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    handleUploadPhoto = (event) => {
        this.file = event.target.files[0];
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <FormWrapper bordered>
                    <Row>
                        <Col xs={24} sm={8}>
                            <FormGroup controlId="file">
                                <ControlLabel>Run Photo</ControlLabel>
                                <FormControl
                                    onChange={this.handleUploadPhoto}
                                    type="file" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <FormGroup controlId="distance">
                                <ControlLabel>Distance</ControlLabel>
                                <FormControl type="number" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <FormGroup controlId="hour">
                                <ControlLabel>Hour</ControlLabel>
                                <FormControl type="number" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={4}>

                            <FormGroup controlId="minutes">
                                <ControlLabel>Minutes</ControlLabel>
                                <FormControl type="number" onChange={this.handleChange} />
                            </FormGroup>

                        </Col>
                        <Col xs={12} sm={4}>
                            <FormGroup controlId="seconds">
                                <ControlLabel>Seconds</ControlLabel>
                                <FormControl type="number" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <br />
                    <LoaderButton
                        bsStyle="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.props.loading}
                        text="Submit Run"
                        loadingText="Submitting Run..." />&nbsp;
                    <Button onClick={this.props.onCancel}> Cancel</Button>
                </FormWrapper>
            </form>
        )
    }
}

FormSubmitRun.propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
}


export default FormSubmitRun;