import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message, Input, Button, Checkbox, Row, Col, Form, Spin } from 'antd';

import InputNumber from '../../components/InputNumber';

import FormWrapper from '../../components/FormWrapper';
import FormItem from '../../components/FormItem';
import UploadPhoto from '../../components/UploadPhoto';

import LoaderButton from '../../components/LoaderButton';

class FormSubmitRun extends Component {
    constructor(props) {
        super(props);
        this.file = null;
    }

    state = {
        distance: 0,
        minutes: 0,
        seconds: 0,
        notes: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if (this.props.onSubmit) {
                    this.props.onSubmit(values, this.file);
                }
                return;
            }
            console.log(err);

        });
    }

    handleUploadPhoto = (event) => {
        this.file = event.target.files[0];
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} >
                <FormWrapper bordered>
                    <Row>
                        <Col xs={24} sm={8}>
                            <FormItem label="Upload Photo">
                                <input
                                    onChange={this.handleUploadPhoto}
                                    type="file" />
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            <FormItem label="Distance">
                                {getFieldDecorator('distance', {
                                    rules: [{ required: true, message: 'Distance required' }],
                                })(
                                    <InputNumber placeholder="Distance" min={0} className="form-control" />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row gutter={5}>
                        <Col xs={24} sm={8}>
                            <FormItem label="Hour">
                                {getFieldDecorator('hour', {
                                    rules: [{ required: true, message: 'Hour required' }],
                                })(
                                    <InputNumber placeholder="Hour" min={0} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col xs={24} sm={8}>
                            <FormItem label="Minutes">
                                {getFieldDecorator('minutes', {
                                    rules: [{ required: true, message: 'Minutes required' }],
                                })(
                                    <InputNumber min={0} max={59} />
                                    )}
                            </FormItem>

                        </Col>
                        <Col xs={24} sm={8}>
                            <FormItem label="Seconds">
                                {getFieldDecorator('seconds')(
                                    <InputNumber min={0} max={59} />
                                )}
                            </FormItem>

                        </Col>
                    </Row>

                    <br />


                    <Button type="primary" htmlType="submit" > Submit Run</Button>
                    <Button > Cancel</Button>
                </FormWrapper>
            </Form>
        )
    }
}

FormSubmitRun.propTypes = {
    onSubmit: PropTypes.func
}


export default Form.create()(FormSubmitRun);