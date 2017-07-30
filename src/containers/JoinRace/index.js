import React, { PropTypes } from 'react';
import FormJoinRace from '../../components/FormJoinRace';
import AppLayout from '../../components/AppLayout';

export class JoinRace extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onSubmit = (model) => {
    //TODO, call actual API for submit here
    console.log(this.props);
  }

  render() {
    console.log(this.props);
    const id = this.props.match.params.id;
    return (
      <AppLayout>
        <FormJoinRace onSubmit={this.onSubmit} />
      </AppLayout>
    );
  }
}

export default JoinRace;
