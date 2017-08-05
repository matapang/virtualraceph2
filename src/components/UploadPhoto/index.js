import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { getBase64 } from '../../libs/util';
import { Upload, Icon } from 'antd';
import {s3Upload} from '../../libs/awsLib'

class UploadPhoto extends Component {

    state = {
        imageUrl: ''
    }
    handleUploadPhoto = (info) => {     
        console.log(info);   
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            //getBase64(info.file.originFileObj, imageUrl => this.setState({ imageUrl }));
        }
    }

    render() {
        const { imageUrl } = this.state;
        return (
            <Upload
                className="photo-uploader"
                name="avatar"
                showUploadList={false}
                beforeUpload={() => true}
                onChange={this.handleUploadPhoto}
            >
                {
                    imageUrl ?
                        <img src={imageUrl} alt="" className="avatar" /> :
                        <div style={{padding:"30px 50px 30px 50px", background:'lightgrey', border:"2px dashed darkgrey"}}>
                            <Icon type="plus" className="avatar-uploader-trigger" />
                        </div>
                }
            </Upload>
        )
    }
}

UploadPhoto.propTypes = {
    onChange: PropTypes.func,
}

export default UploadPhoto
