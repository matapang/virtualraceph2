import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import {
    Row,
    Col,
    FormGroup,
    FormControl,
    ControlLabel,
    Panel,
    Button
} from 'react-bootstrap';
import FormWrapper from '../FormWrapper';
import FormItem from '../FormItem';
import AppLink from '../AppLink';

import Select from '../Select';
import ShirtSizes from './ShirtSizes';


const SHIRT_SIZES = [
    "2XS (17 x 24 inches)",
    "XS (18 x 25 inches)",
    "S (19 x 25 inches)",
    "M (20 x 27 inches)",
    "L (21 x 28 inches)",
    "XL (22 x 29 inches)",
    "2XL (23 x 30 inches)",
    "Custom"
];

const AGE_GROUP = [
    "17 and Below",
    "18 to 24",
    "25 to 34",
    "35 to 44",
    "45 to 54",
    "55 to 64",
    "65 and Up",
];

class FormJoinRace extends Component {

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
            this.props.onSubmit(this.state);
        }
    }


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    handleUploadPhoto = (event) => {
        this.file = event.target.files[0];
    }
    render() {
        const imageUrl = "";
        const { categories } = this.props;
        return (
            <form onSubmit={this.handleSubmit} >
                <FormWrapper>
                    <h4>Runner Details </h4>
                    <Row>
                        <Col xs={12} sm={5}>
                            <FormGroup controlId="firstName ">
                                <ControlLabel>First Name</ControlLabel>
                                <FormControl type="text" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={12}  sm={5} >
                            <FormGroup controlId="lasName ">
                                <ControlLabel>Last Name</ControlLabel>
                                <FormControl type="text" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={12}  sm={2}>
                            <FormGroup controlId="sex">
                                <ControlLabel>Sex</ControlLabel>
                                <Select data={["Male", "Female"]} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <hr />
                    <br />
                    <h4>Contact Details</h4>

                    <Row>
                        <Col xs={6}>
                            <FormGroup controlId="email">
                                <ControlLabel>Email Address</ControlLabel>
                                <FormControl type="text" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={6}>
                            <FormGroup controlId="contact">
                                <ControlLabel>Contact #</ControlLabel>
                                <FormControl type="text" onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <hr />
                    <br />
                    <h4>Race Details </h4>
                    <Row>
                        <Col xs={12} sm={4}>
                            <FormGroup controlId="shirtSize">
                                <ControlLabel>Shirt Size</ControlLabel>
                                <ShirtSizes  onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={4}>
                            <FormGroup controlId="category">
                                <ControlLabel>Category</ControlLabel>
                                <Select data={categories} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={4}>
                            <FormGroup controlId="ageGroup">
                                <ControlLabel>Age Group</ControlLabel>
                                <Select data={AGE_GROUP} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <hr />
                    <br />
                    <h4>Shipping Address </h4>
                    <Row>                               

                        <Col xs={12}>
                            <FormGroup controlId="notes">
                                <ControlLabel>Complete Adress <small>(Unit #, Street, PostalCode, Country )</small></ControlLabel>
                                <FormControl componentClass="textarea" onChange={this.handleChange} rows={4}/>
                            </FormGroup>
                        </Col>
                       
                    </Row>


                </FormWrapper>
            </form >
        )
    }
}

FormJoinRace.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func
}

export default FormJoinRace;


