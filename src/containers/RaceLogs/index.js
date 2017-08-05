import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button, Spin } from 'antd';

import { invokeApig } from '../..//libs/awsLib';
import { ListGroup, ListGroupItem, Panel, Alert } from 'react-bootstrap';
import LogDetails from './LogDetails';
import Total from './Total';

const Text = styled.label`
    font-size:24px;
    font-weight:bold;
`;

class RaceLogs extends Component {
    state = {
        logs: [],
        showSubmitRun: false
    }

    async componentDidMount() {

        try {
            const response = await this.getUserRaceLog();
            if (response && response.logs) {
                this.setState({ logs: response.logs });
            }
        }
        catch (e) {
            this.setState({ logs: [] });
        }
    }

    getUserRaceLog() {
        return invokeApig({ path: `/user/log/${this.props.match.params.id}` }, this.props.userToken);
    }

    onViewDetails = (log, key) => {
        this.setState({ selectedLog: log, selectedLogId: key, showDetails: true });
    }

    onViewDetailsBack = (shouldFetch) => {
        if (shouldFetch) {
            let p = this.getUserRaceLog();
            p.then((results) => {
                this.setState({ showDetails: false, logs:results.logs });
            });
        }
    }

    renderLogs(logs) {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Total target={18} logs={logs} />
                    </div>

                    <div className="col-md-8">
                        <ListGroup>
                            {logs.map((log, key) => (<ListGroupItem key={key} style={{ borderLeft: "4px solid #0da9ef" }}>
                                <label><i className="fa fa-flash" /> Run  {`${key + 1}`}</label>
                                <div className="pull-right">
                                    <a onClick={() => this.onViewDetails(log, key)}>View Details</a>
                                </div>
                                <div>

                                    <Text><i className="fa fa-fw fa-road" />{log.distance} Km</Text> &nbsp;&nbsp;
                                     <Text><i className="fa fa-fw fa-clock-o" />{log.hour}:{log.minutes}:{log.seconds} </Text>

                                </div>

                            </ListGroupItem>))}
                        </ListGroup>
                    </div>
                </div>
            </div>
        );
    }



    render() {
        const { id } = this.props.match.params;
        const { logs, showDetails } = this.state;
        if (showDetails) {
            return <LogDetails log={this.state.selectedLog}
                logId={this.state.selectedLogId} raceId={id}
                onBack={this.onViewDetailsBack}
                userToken={this.props.userToken} />
        }
        return (
            <div>
                <h1>Race {id}
                    <div className="pull-right">
                        <Button type="primary"><Link to={`/submit-run/${id}`}><i className="fa fa-plus" /> Add Log </Link></Button>
                    </div>
                </h1>
                <br />
                {logs.length > 0 ?
                    this.renderLogs(logs) : <Alert bsStyle="warning">You have no logs</Alert>}
            </div>
        );
    }
}

function mapState(state, ownProps) {
    const raceId = ownProps.match.params.id;
    const raceInfo = state.races.getIn(["active", raceId]);
    const logs = raceInfo ? raceInfo.get("logs").toJS() : [];

    return {
        logs: logs
    }
}

export default connect(mapState, null)(RaceLogs);