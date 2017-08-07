import React from 'react';
import {connect} from 'react-redux';
import CardProfile from '../../components/CardProfile';

const Profile = (props) => {    
    console.log(props.profileImageUrl);
    return <CardProfile {...props} />
}

function mapState(state) {
    return {
        email: state.user.get("email"),
        name: state.user.get("name"),
        profileImageUrl: state.user.get("profileImageUrl"),
    }
}


export default connect(mapState)(Profile);