import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.footer`
    height:170px;
    padding:10px;
    background:#374250;
    font-size:12px;
    color:white;
    .title {
        margin-bottom: 20px;
        padding-bottom: 12px;
        border-bottom: 1px solid #e1e7ec;
        color: #9da9b9;
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        border-color:rgba(255,255,255,0.12);
        color:rgba(255,255,255,0.5);
    }

    a {
        text-decoration:none;
    }
`;

const Footer = () => {
    return (<Wrapper>
        <h3 className="title">
            GET IN TOUCH WITH US
        </h3>
        <div>
            Phone: +63956-135-6533
        </div>
        <div style={{margin:0}}>
            <span style={{ opacity: 0.51 }}>Monday-Friday:</span>&nbsp;9.00 am - 8.00 pm
        </div>
        <br />
        <a className="text-white" href="mailto:someone@example.com">contactus@virtualraceph.com</a>
    </Wrapper>);
}

export default Footer;