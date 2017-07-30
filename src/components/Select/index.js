import React from 'react';
import PropTypes from 'prop-types';
import {Select as AntSelect} from 'antd';
const {Option}  = AntSelect;

class Select extends React.PureComponent {
    render() {
        const {data, value, onChange} = this.props;
        if (data == null) return false;
        return (<AntSelect onChange={onChange}>
                    {data.map((item, key) => <Option key={key} value={item}> {item}</Option>)}
                </AntSelect>
                )
    }
}

Select.propTypes =  {
    data:PropTypes.arrayOf(PropTypes.string),
    value:PropTypes.string,
    onChange:PropTypes.func
};

export default Select;