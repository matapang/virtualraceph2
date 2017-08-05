import React, { Component, PropTypes } from 'react';
import { Button, Card } from 'antd';

import { invokeApig } from '../..//libs/awsLib';
import AppLayout from '../../components/AppLayout';

class LogDetails extends Component {
    state ={
        loading:false
    };

    onDelete = () => {
        const { raceId, logId  } = this.props;
        this.setState({ loading: true });
        this.deleteLog(raceId, logId);
    }

    async deleteLog(raceId, logId) {
        await invokeApig({ path: `/user/log/${raceId}/${logId}`, method:'DELETE' }, this.props.userToken);
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
                    <Button type="primary" loading={this.state.loading} onClick={this.onDelete}>Delete </Button>
                </div>

                <Card bodyStyle={{ padding: 0 }}>

                    {JSON.stringify(log)}

                </Card>
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