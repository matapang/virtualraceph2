import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 5px;
    padding-left:10px;
    padding-right:10px;
    background:red;
    font-size:12px;
    background:#f5f5f5;
    border:1px solid darken(#f5f5f5, 5%);
`;
class ContactBar extends Component {
    render() {
        return (
            <Wrapper>
                <span>contactus@virtualraceph.com</span> | &nbsp;
                <span><i className="fa fa-facebook"/></span>
            </Wrapper>
        );
    }32
}

export default ContactBar;