import React, { PropTypes } from 'react';
import FormSubmitRun from '../../components/FormSubmitRun';
import AppLayout from '../../components/AppLayout';

import { invokeApig } from '../../libs/awsLib';

export class SubmitRun extends React.Component { // eslint-disable-line react/prefer-stateless-function

  async componentDidMount() {
    const response = await this.getRaceLog("marawi-challeng2e");
    console.log(response);
  }

  onSubmit = (model) => {
    //TODO, call actual API for submit here
    const response = this.submitLog({ content: "test 123" });

    console.log(response);
  }

  getRaceLog(raceId) {
    return invokeApig({
      path: `/user/log/${raceId}`,
      method: 'POST'
    }, this.props.userToken);
  }

  submitLog(note) {
    return invokeApig({
      path: '/posts',
      method: 'POST',
      body: note,
    }, this.props.userToken);
  }

  render() {
    return (
      <AppLayout>
        <FormSubmitRun onSubmit={this.onSubmit} />
      </AppLayout>
    );
  }
}

export default SubmitRun;
