import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextInfo from '../TextInfo';
import { Row, Col, Card, Avatar, Icon, Button } from 'antd';
import {Panel} from 'react-bootstrap';
import RunSummary from '../RunSummary';



class CardPostFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, id, distance, time, description, onLike, onComment, onHeart } = this.props;
        return (
            <Panel>
                <Row type="flex" gutter={16}>
                    <Avatar icon="user" shape="square" size="large" src="http://lorempixel.com/100/100/sports/1" />
                    <div>
                        <h3>{name}</h3>
                        <TextInfo><small>{id}</small></TextInfo>
                        <div>
                            <Icon type="pay-circle" /> {distance} <strong>km</strong>&nbsp;&nbsp;&nbsp;
                            <Icon type="clock-circle-o" /> {time}
                        </div>
                    </div>
                </Row>
                <br/>
                <div>
                    <TextInfo>
                        {description}
                    </TextInfo>
                </div>
                <div>
                   <Button icon="heart-o" type="ghost" onClick={onHeart} title="Follow"></Button>
                   <Button icon="like-o" type="ghost" title="Like"></Button>
                   <Button  type="ghost"> Comment</Button>
                </div>                
            </Panel>
        )
    }
}

CardPostFeed.defaultProps = {
    name: 'Anthony Wong',
    id: '10132449',
    distance: '101',
    time: '1hr',
    description:'What a wonderful run'
};

CardPostFeed.propTypes = {
    name: PropTypes.string,
    id: PropTypes.id,
    distance: PropTypes.number,
    description:PropTypes.string,
    onLike:PropTypes.func,    
    onComment:PropTypes.func,    
    onHeart:PropTypes.func,
};

export default CardPostFeed;
