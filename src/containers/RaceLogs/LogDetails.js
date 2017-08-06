import React, { Component, PropTypes } from 'react';
import { Button, Panel } from 'react-bootstrap';
import ImageRun from '../../components/ImageRun';

import { invokeApig } from '../..//libs/awsLib';
import AppLayout from '../../components/AppLayout';

class LogDetails extends Component {
    state = {
        loading: false
    };

    onDelete = () => {
        const { raceId, logId } = this.props;
        this.setState({ loading: true });
        this.deleteLog(raceId, logId);
    }

    async deleteLog(raceId, logId) {
        await invokeApig({ path: `/user/log/${raceId}/${logId}`, method: 'DELETE' }, this.props.userToken);
        this.setState({ loading: false }, () => {
            if (this.props.onBack) {
                this.props.onBack(true);
            }
        });

    }

    render() {
        const { log } = this.props;
        return (
            <AppLayout>
                <div className="text-right">
                    <Button bsStyle="danger" loading={this.state.loading} onClick={this.onDelete}> <i className="fa fa-trash" />Delete </Button>
                </div>

                <Panel>
                    <ImageRun src={log.uploadedFilename}/>
                    {JSON.stringify(log)}

                </Panel>
            </AppLayout>
        );
    }
}

LogDetails.propTypes = {
    log: PropTypes.shape({
        imageUrl: PropTypes.string,
        distance: PropTypes.number,
        minutes: PropTypes.number,
        seconds: PropTypes.number,
    }),
    logId: PropTypes.number,
    raceId: PropTypes.string,
    userToken: PropTypes.string,

    onBack: PropTypes.func
};

export default LogDetails;