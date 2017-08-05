import React, { PropTypes } from 'react';
import {withRouter} from 'react-router-dom';
import FormSubmitRun from '../../components/FormSubmitRun';
import AppLayout from '../../components/AppLayout';

import { invokeApig } from '../../libs/awsLib';

export class SubmitRun extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onSubmit = (model) => {
    //TODO, call actual API for submit here
    this.submitLog(model);
  }

  goBack = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/races/${id}/logs`);
  }

  async submitLog(log) {
    const { id } = this.props.match.params;
    const model = { log,  raceId: id };
    
    try {
      const response = await invokeApig({
        path: '/user/log',
        method: 'POST',
        body: model,
      }, this.props.userToken);
    }
    catch(e) {
      console.log(e);
    }
    this.goBack();
    
  }

  render() {
    return (
      <AppLayout>
        <FormSubmitRun onSubmit={this.onSubmit} onCancel={this.goBack} />
      </AppLayout>
    );
  }
}

export default withRouter(SubmitRun);
