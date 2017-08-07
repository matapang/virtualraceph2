import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

import { invokeApig } from '../..//libs/awsLib';
import { ListGroup, ListGroupItem, Panel, Alert } from 'react-bootstrap';
import LogDetails from './LogDetails';
import LogItem from './LogItem';
import Total from './Total';
import Spinner from '../../components/Spinner';

const Text = styled.label`
    font-size:24px;
    font-weight:bold;
`;

class RaceLogs extends Component {
    state = {
        loading: true,
        logs: [],
        showSubmitRun: false
    }

    async componentDidMount() {

        try {
            const response = await this.getUserRaceLog();
            if (response && response.logs) {
                this.setState({ logs: response.logs, loading: false });
            }
        }
        catch (e) {
            this.setState({ logs: [], loading: false });
        }
    }

    getUserRaceLog() {
        return invokeApig({
            path: `/user/log/${this.props.match.params.id}`,
            method: "POST",
            body: { email: this.props.email }
        },
        this.props.userToken);
    }

    onViewDetails = (log, key) => {
        this.setState({ selectedLog: log, selectedLogId: key, showDetails: true });
    }

    onViewDetailsBack = (shouldFetch) => {
        if (shouldFetch) {
            this.setState({ loading: true });
            let p = this.getUserRaceLog();
            p.then((results) => {
                this.setState({ showDetails: false, logs: results.logs, loading: false });
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
                            {logs.map((log, key) => <LogItem log={log} key={key} index={key} onClick={() => this.onViewDetails(log, key)} />)}
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
            <Spinner spinning={this.state.loading}>
                <div>
                    <h1>Race {id}
                        <div className="pull-right">
                            <Link to={`/submit-run/${id}`} className="btn btn-primary" style={{ color: "white" }}><i className="fa fa-plus" /> Add Log </Link>
                        </div>
                    </h1>
                    <br />
                    {logs.length > 0 ?
                        this.renderLogs(logs) : <Alert bsStyle="warning">You have no logs</Alert>}
                </div>
            </Spinner>
        );
    }
}

function mapState(state, ownProps) {
    const raceId = ownProps.match.params.id;
    const raceInfo = state.races.getIn(["active", raceId]);
    const logs = raceInfo ? raceInfo.get("logs").toJS() : [];

    return {
        logs: logs,
        email: state.user.get("email")
    }
}

export default connect(mapState, null)(RaceLogs);