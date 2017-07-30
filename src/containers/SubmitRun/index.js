import React, { PropTypes } from 'react';
import FormSubmitRun from '../../components/FormSubmitRun';
import AppLayout from '../../components/AppLayout';

export class SubmitRun extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onSubmit = (model) => {
    //TODO, call actual API for submit here
    console.log(this.props);
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
