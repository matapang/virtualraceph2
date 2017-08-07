import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CardRaces from '../../components/CardRaces';

const ActiveRaces = ({ races, history }) => {
    if (races == null) {
        return <h3>No Active Races</h3>
    }

    return <CardRaces data={races} onClick={(id) => history.push(`/races/${id}/logs`)} />
}

function mapState(state) {
    const raceState = state.races.toJS();
    return {
        races: raceState.items
    }
}


export default withRouter(connect(mapState)(ActiveRaces));