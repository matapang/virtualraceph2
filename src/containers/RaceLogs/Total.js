import React, { PureComponent, PropTypes } from 'react';
import styled from 'styled-components';
import { Panel, ProgressBar } from 'react-bootstrap';

const Text = styled.label`
    font-size:24px;
    font-weight:bold;
`;
class Total extends PureComponent {

    getProgressClass(progVal) {
        if (progVal < 50) {
            return ""
        };
        if (progVal > 50 && progVal < 80) {
            return "warning";
        }
        return "success";
    }

    render() {
        const { logs, target } = this.props;
        const total = logs.reduce((sum, log) => sum + log.distance, 0);

        const progVal = Math.floor(total / target * 100);
        const progClass = this.getProgressClass();
        return (
            <Panel>
                <div>
                    <Text> {progVal}% </Text>
                    <Text className="pull-right"><i className="fa fa-line-chart" /></Text>
                </div>
                <div>
                    <label className="control-label">Current: {total}Km</label>  |&nbsp;
                    <label className="control-label">Target:{target}Km</label>

                </div>

                <ProgressBar now={progVal} bsStyle={progClass} />
            </Panel>
        );
    }
}

Total.defaultProps = {
    logs: [{ hour: 0, minutes: 0, seconds: 0, distance: 0 }]
}

Total.propTypes = {
    target: PropTypes.number,
    logs: PropTypes.array
}

export default Total;