import React from 'react';

const Spinner = ({ children, spinning }) => {
    return (
        <div>
            {spinning && <div className="text-center" style={{ 
                position: 'absolute', 
                paddingTop:"100px",
                top:0, 
                bottom:0, 
                left:0, 
                right:0, 
                zIndex: 500, background: "rgba(211,211,211, 0.5)" }}>
                <i className="fa fa-spin fa-5x fa-refresh" />
            </div>}
            <div>
                {children}
            </div>
        </div>
    )
};

export default Spinner;