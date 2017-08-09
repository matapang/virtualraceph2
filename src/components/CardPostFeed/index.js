import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextInfo from '../TextInfo';
import { Panel, Button, Row, Col, Media } from 'react-bootstrap';
import RunSummary from '../RunSummary';



class CardPostFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, id, distance, time, description, onLike, onComment, onHeart } = this.props;
        return (
            <Panel>
                <Media>
                    <Media.Left>
                        <img width={80} height={80} src="http://lorempixel.com/100/100/sports/1" alt="No Profile Photo" />
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{name}</Media.Heading>
                        <TextInfo> <i className="fa fa-road" style={{color:'black'}} />{distance}<strong>km</strong>&nbsp;&nbsp;&nbsp;
                           <i className="fa fa-clock-o" style={{color:'black'}}/>{time}</TextInfo>
                    </Media.Body>
                </Media>
               
                <br />
                <div>
                    <TextInfo>
                        {description}
                    </TextInfo>
                </div>
                <div>
                    <i className="fa fa-thumbs-o-up"  title="like"/>&nbsp;
                    <i className="fa fa-comment-o"  title="comment"/>
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
    description: 'What a wonderful run'
};

CardPostFeed.propTypes = {
    name: PropTypes.string,
    id: PropTypes.id,
    distance: PropTypes.number,
    description: PropTypes.string,
    onLike: PropTypes.func,
    onComment: PropTypes.func,
    onHeart: PropTypes.func,
};

export default CardPostFeed;
