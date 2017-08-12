import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Button, Panel, Row, Col } from 'react-bootstrap';
import ImageRun from '../../components/ImageRun';
import LogItem from './LogItem';
import { invokeApig } from '../..//libs/awsLib';

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
        await invokeApig({ path: `/user/log-entry/${raceId}/${logId}`, method: 'PUT', 
            body:{email:this.props.email} }, this.props.userToken);
        this.setState({ loading: false }, () => {
            if (this.props.onBack) {
                this.props.onBack(true);
            }
        });

    }

    render() {
        const { log, logId, onBack } = this.props;
        return (
            <div style={{ margin: 10 }}>
                <div className="text-right">

                <Button bsStyle="primary" onClick={onBack} > <i className="fa fa-arrow-left"/> Go Back </Button>
                </div>
                <div>
                    <div className="row">
                        <div className="col-sm-8">

                            <ImageRun src={log.uploadedFilename} className="img-responsive" />
                        </div>

                    </div>

                    <br />
                    <LogItem log={log} index={logId}>

                        <Button bsStyle="danger" loading={this.state.loading} onClick={this.onDelete}> <i className="fa fa-trash" />Delete </Button>

                    </LogItem>

                </div>
            </div>
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

function mapState(state) {
    return {
        email:state.user.get("email")
    }
}

export default connect(mapState)(LogDetails);