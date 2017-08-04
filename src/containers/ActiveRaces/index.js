import React from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import CardRaces from '../../components/CardRaces';

const ActiveRaces = ({ races, history }) => {
    if (races == null) {
        return <h3>No Active Races</h3>
    }

    const activeRaces = Object.keys(races).map(key => Object.assign({}, {
        id:key,
        title: races[key].title,
        description: races[key].description,
        url: races[key].imageUrl
    }));

    return <CardRaces data={activeRaces} onClick={(id) => history.push(`/races/${id}/logs`)} />
}

function mapState(state) {
    return {
        races: state.races.get("active").toJS()
    }
}


export default withRouter(connect(mapState)(ActiveRaces));