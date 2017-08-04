import React from 'react';
import { connect } from 'react-redux';
import CardRaces from '../../components/CardRaces';

const ActiveRaces = ({ races }) => {
    if (races == null) {
        return <h3>No Active Races</h3>
    }

    const activeRaces = Object.keys(races).map(key => Object.assign({}, {
        title: races[key].title,
        description: races[key].description,
        url: races[key].imageUrl
    }));

    return <CardRaces data={activeRaces} />
}

function mapState(state) {
    return {
        races: state.races.get("active").toJS()
    }
}


export default connect(mapState)(ActiveRaces);