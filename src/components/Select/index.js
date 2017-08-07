import React from 'react';
import PropTypes from 'prop-types';
import  {FormControl} from 'react-bootstrap';

class Select extends React.PureComponent {
    render() {
        const {data, value, onChange} = this.props;
        if (data == null) return false;
        return (<FormControl componentClass="select" onChange={onChange}>
                    {data.map((item, key) => <option key={key} value={item}> {item}</option>)}
                </FormControl>
                )
    }
}

Select.propTypes =  {
    data:PropTypes.arrayOf(PropTypes.string),
    value:PropTypes.string,
    onChange:PropTypes.func
};

export default Select;