
import http from '../libs/http';
import { fromJS } from 'immutable';

const LOAD_USER_RACES = 'LOAD_USER_RACES';
const FETCH_EVENT_RACES_START = 'FETCH_EVENT_RACES_START';
const FETCH_EVENT_RACES_SUCCESS = 'FETCH_EVENT_RACES_SUCCESS';

export function loadUserRace(past, active) {
    return { type: LOAD_USER_RACES, past, active }
}

export function fetchEventRaces(races) {
    return function (dispatch) {
        dispatch({ type: FETCH_EVENT_RACES_START });
        return http.get("/metadata/races/summary.json").then(r => {
            dispatch({ type: FETCH_EVENT_RACES_SUCCESS, races: r.data });
            return r.data;
        })
        
    }
}

// The initial state of the App
const initialState = fromJS({
    items: [],
    loading: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EVENT_RACES_START:
            return state
                .set("loading", true);
        case FETCH_EVENT_RACES_SUCCESS:            
            return state
                .set("items", action.races)
                .set("loading", false)
        default:
            return state
    }
}