import React, { PropTypes } from 'react';
import styled from 'styled-components';
import TextInfo from '../TextInfo';
import CardImage from '../CardImage';
import { Panel, Row, Col } from 'react-bootstrap';

class CardRaces extends React.Component {
    constructor(props) {
        super(props);
    }

    onClick = (id) => {

        if (this.props.onClick) {
            this.props.onClick(id);
        }
    }

    render() {
        const { data } = this.props;
        return (
            <div className="container-fluid">
                <Row>
                    {data.map((race, key) =>
                        <Col key={key} md={6} style={{ marginBottom: 5, marginTop: 5 }}>
                            <CardImage imageUrl={race.cardImageUrl} onClick={() => this.onClick(race.id)}>
                                <div >
                                    <h3>{race.title}</h3>
                                    <TextInfo>{race.description}</TextInfo>
                                </div>
                            </CardImage>
                        </Col>
                    )}

                </Row>
            </div>
        )
    }
}

/*
CardRaces.defaultProps = {
    data: [
        { id:'spartan-challenge', title: 'Spartan Challenge', date: '2017-Aug-12', description: 'Spartan Challenge', url:'http://lorempixel.com/400/200/sports/1' },
        { id:'takbo-marawi', title: 'Takbo Marawi', date: '2017-Aug-12', description: 'Spartan Challenge', url:'http://lorempixel.com/400/200/sports/2' },
    ]
};
*/
CardRaces.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.date,
        description: PropTypes.string,
        url: PropTypes.string

    }))
};

export default CardRaces;
