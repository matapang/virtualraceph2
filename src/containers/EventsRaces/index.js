import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from "prop-types";
import {fetchEventRaces} from '../../modules/races';
import http from '../../libs/http';
import CardRaces from '../../components/CardRaces';
import Spinner from '../../components/Spinner'

class EventRaces extends Component {    
    componentDidMount() {
        this.props.dispatch(fetchEventRaces());
    }
    render() {
        const {races} = this.props;
        return (
            <div>
                {races ? <CardRaces data={races}  onClick={(id) => this.props.history.push(`/races/${id}`)} /> : <i className="fa fa-spin fa-2x fa-refresh" />}
            </div>
        );
    }
}

function mapState(state) {        
    const raceState = state.races.toJS();
    return {
        races:raceState.items
    }
}

export default withRouter(connect(mapState, null)(EventRaces));