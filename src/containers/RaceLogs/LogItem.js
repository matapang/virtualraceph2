import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const Text = styled.label`
    font-size:24px;
    font-weight:bold;
`;

const LogItem = ({ log, index, onClick, children }) => {
    return (
        <ListGroupItem style={{ borderLeft: "4px solid #0da9ef" }}>
            <label><i className="fa fa-flash" /> Run  {`${index + 1}`}</label>
            <div className="pull-right">
                {onClick && <a onClick={() => onClick(log, index)}>View Details</a>}
                {children && children}
            </div>
            <div>
                <Text><i className="fa fa-fw fa-road" />{log.distance} Km</Text> &nbsp;&nbsp;
                 <Text><i className="fa fa-fw fa-clock-o" />{log.hour}:{log.minutes}:{log.seconds} </Text>

            </div>

        </ListGroupItem>
    )
}

LogItem.propTypes = {
    log: PropTypes.shape({
        minutes: PropTypes.number,
        distance: PropTypes.number,
        hour: PropTypes.number,
        seconds: PropTypes.seconds
    }),
    index: PropTypes.number,
    onClick: PropTypes.func
}

export default LogItem;