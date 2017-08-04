import React, { Component } from 'react';
import {connect} from  "react-redux";
import AppLayout from '../../components/AppLayout';
import FormSubmitRun from '../../components/FormSubmitRun';

class RaceLogs extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <FormSubmitRun />

                <span>Table will go here</span>
            </div>
        );
    }
}

function mapState(state) {
    return {}
}
 
export default RaceLogs;