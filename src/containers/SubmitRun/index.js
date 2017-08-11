import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import FormSubmitRun from '../../components/FormSubmitRun';
import AppLayout from '../../components/AppLayout';

import { invokeApig, s3Upload } from '../../libs/awsLib';
import Spinner from '../../components/Spinner';
import config from '../../config';

export class SubmitRun extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    showUploadError: true,
    loading: false,
  }
  onSubmit = (model, file) => {
    //TODO, call actual API for submit here
    this.submitLog(model, file);
  }

  goBack = () => {
    const { id } = this.props.match.params;
    this.props.history.push(`/races/${id}/logs`);
  }

  async submitLog(log, file) {
    const { id } = this.props.match.params;

    let uploadedFilename = null;

    if (file && file.name.length > 10) {
      this.setState({ errorMsg: "Filename exceeds length of 10" });
      return;
    }

    if (file && file.size < config.MAX_ATTACHMENT_SIZE) {
      this.setState({ loading: true });
      uploadedFilename = (await s3Upload(file, this.props.userToken)).Location;
    }
    else if (file && file.size >= config.MAX_ATTACHMENT_SIZE) {
      this.setState({ errorMsg: "File exceeds 5MB", loading:false });
      return;
    }


    let newLog = Object.assign({}, log, { uploadedFilename });
    const model = { log: newLog, raceId: id, email: this.props.email };
    try {
      const response = await invokeApig({
        path: '/user/log-entry',
        method: 'POST',
        body: model,
      }, this.props.userToken);
    }
    catch (e) {
      console.log(e);
    }
    this.setState({ loading: false }, () =>

      this.goBack()
    );


  }

  render() {
    const { loading } = this.state;
    return (
      <AppLayout>
        {this.state.errorMsg && <Alert bsStyle="danger" closable={true}>{this.state.errorMsg}</Alert>}
        <FormSubmitRun onSubmit={this.onSubmit} onCancel={this.goBack} loading={loading}/>
      </AppLayout>
    );
  }
}


function mapState(state) {
  return {
    email: state.user.get("email")
  };
}

export default withRouter(connect(mapState)(SubmitRun));
