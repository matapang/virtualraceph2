import React, { PropTypes } from 'react';
import CardPostFeed from '../../components/CardPostFeed';
import AppLayout from '../../components/AppLayout';

export class Feeds extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <AppLayout>
        <CardPostFeed/>
      </AppLayout>
    );
  }
}

export default Feeds;
