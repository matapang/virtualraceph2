import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message, Form, Input, InputNumber, Button, Checkbox, Row, Col, Select } from 'antd';
import FormWrapper from '../FormWrapper';
import FormItem from '../FormItem';
import UploadPhoto from '../UploadPhoto';
import AppLink from '../AppLink'
const {Option} = Select;


class FormJoinRace extends Component {

    handleSubmit = () => {
        console.log("submit");
    }

    render() {
        const imageUrl = "";
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormWrapper>
                    {/* First Name Last Name */}
                    <div>
                        <h3>Personal Information</h3>
                        <hr/>
                        <Row gutter={10}>
                            <Col md={12} xs={24}>
                                <FormItem label="First Name">
                                    <Input placeholder="First Name" />
                                </FormItem>
                            </Col>
                            <Col md={12} xs={24}>
                                <FormItem label="Last Name">
                                    <Input placeholder="Last Name" />
                                </FormItem>
                            </Col>
                        </Row>

                        {/* Phone  */}
                        <Row gutter={10}>
                            <Col md={12} xs={24}>
                                <FormItem label="Contact #">
                                    <InputNumber
                                        style={{ width: "100%" }}
                                        placeHolder="Number"
                                    />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>

                    {/* Race Information */}
                    <div>
                        <h3>Race Information</h3>
                          <hr/>
                        <Row gutter={10}>
                            <Col md={12} xs={24}>
                                <FormItem label="Category">
                                    <Select >
                                        <Option value="lucy">3K</Option>
                                        <Option value="jack">10K</Option>

                                        <Option value="tom">21K</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                            <Col md={12} xs={24}>
                                <FormItem label="TShirt Size">
                                    <Select >
                                        <Option value="lucy">XS</Option>
                                        <Option value="jack">SM</Option>

                                        <Option value="tom">M</Option>
                                        <Option value="tom">L</Option>

                                        <Option value="tom">XL</Option>
                                    </Select>
                                </FormItem>
                            </Col>
                        </Row>
                    </div>

                    {/* Mailing Address */}
                    <div>
                        <h3>Mailing Address</h3>
                        <hr/>
                        <Row gutter={10}>

                            <Col xs={24}>
                                <FormItem label="Address">
                                    <Input.TextArea rows={4} placeholder="e.g Street, Bgy, City" />
                                </FormItem>
                            </Col>

                            <Col md={12} xs={24}>
                                <FormItem label="Country">
                                    <Select placeholder="Country" />
                                </FormItem>
                            </Col>
                            <Col md={12} xs={24}>
                                <FormItem label="Postal Code">
                                    <Input placeholder="Postal Code" />
                                </FormItem>
                            </Col>
                        </Row>
                    </div>

                    
                        <Button type="primary" htmlType="submit">
                            Register
                        </Button>
                    
                </FormWrapper>
            </Form>
        )
    }
}

FormJoinRace.propTypes = {

}

export default Form.create()(FormJoinRace);