import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <img src="https://virtualraceph.com/wp-content/uploads/2017/05/VRPH_Long_Rectangle.png" className="img-responsive"
                style={{
                    marginTop:-10,                    
                    display: "block",
                    maxWidth:"200px",
                    maxHeight:"50px",
                    width: "auto",
                    height: "auto"
                }}
            />
        );
    }
}

export default Logo;