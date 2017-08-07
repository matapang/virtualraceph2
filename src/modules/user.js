
import { fromJS } from 'immutable';

const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const UPDATE_USER_TOKEN = 'UPDATE_USER_TOKEN';

export function updateUserInfo(email, name, profileImageUrl) {
    return { type: UPDATE_USER_INFO, email, name, profileImageUrl };
}

export function updateUserToken(token) {
    return { type: UPDATE_USER_TOKEN, token };
}

// The initial state of the App
const initialState = fromJS({
    email: '',
    name:'',
    profileImageUrl:'',
    
    token: ''
});

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return state
                .set("email", action.email)
                .set("name", action.name)
                .set("profileImageUrl", action.profileImageUrl);
        case UPDATE_USER_TOKEN:
            return state
                .set("userToken", action.token)
        default:
            return state
    }
}