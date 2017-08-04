
import { fromJS } from 'immutable';

const LOAD_USER_RACES = 'LOAD_USER_RACES';

export function loadUserRace(past, active) {
    return { type: LOAD_USER_RACES,  past, active }
}

// The initial state of the App
const initialState = fromJS({
    name:'anthony',
    past: {},
    active: {
        "spartan-challenge":{
            logs:[
                {distance:5, hour:1, min:23, seconds:12, notes:"This is my first run", imageUrl:"sample url will go here"}
            ]
        }
    },
});

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USER_RACES:
            return state
                    .set("past", action.past)
                    .set("active", action.active)
        default:
            return state
    }
}