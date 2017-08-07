import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup } from 'react-bootstrap';
import Select from '../Select';


const SHIRT_SIZES = [
    "2XS (17 x 24 inches)",
    "XS (18 x 25 inches)",
    "S (19 x 25 inches)",
    "M (20 x 27 inches)",
    "L (21 x 28 inches)",
    "XL (22 x 29 inches)",
    "2XL (23 x 30 inches)",
    "Custom"
];

class ShirtSizes extends React.Component {

    state = {
        changeToText: false
    }

    handleChange = (e) => {
        if (e.target.value == 'Custom') {
            this.setState({ changeToText: true })
        }
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const { changeToText } = this.state;
        return (
            changeToText ? 
            <InputGroup>
                <FormControl type="text" onChange={this.handleChange}  />
                <InputGroup.Addon>
                    <i className="fa fa-arrow-left" onClick={()=>this.setState({changeToText:false})} />
                </InputGroup.Addon>
            </InputGroup> : <Select data={SHIRT_SIZES} onChange={this.handleChange} />
        );
    }
}

ShirtSizes.propTypes = {
    onChange:PropTypes.func
}

export default ShirtSizes;