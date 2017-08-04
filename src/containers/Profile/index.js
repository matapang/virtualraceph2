import React from 'react';
import {connect} from 'react-redux';
import CardProfile from '../../components/CardProfile';

const Profile = ({email}) => {
    console.log(email);
    return <CardProfile email={email} />
}

function mapState(state) {
    return {
        email: state.user.get("email")
    }
}


export default connect(mapState)(Profile);