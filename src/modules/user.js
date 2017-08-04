
import { fromJS } from 'immutable';

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export function updateUserInfo(email, badge) {
    return { type: UPDATE_USER_INFO,  email,  badge };
}

// The initial state of the App
const initialState = fromJS({
    email: '',
    badge: '',
});

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return state
                    .set("email", action.email)
                    .set("badge", action.badge)
        default:
            return state
    }
}