import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Panel } from 'react-bootstrap';

const Image = styled.div`
 img {
     display: block;
     height:200px;
 }
`;
class CardImage extends React.Component {
    render() {
        return (
            <div onClick={this.props.onClick} style={this.props.style}>
                <Image>
                    <img alt="example" width="100%" src={this.props.imageUrl} />
                </Image>
                <Panel>
                    {this.props.children}
                </Panel>

            </div>
        )
    }
}

CardImage.propTypes ={
    imageUrl:PropTypes.string,
    onClick:PropTypes.func,
}

export default CardImage;