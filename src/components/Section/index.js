import React from 'react';

const Section = (props) => {
    const {title, children, id, className} = props;
    return (
        <section className={`section-heading ${className}`} id={id}>
            <h2>
                {title}
            </h2>
            {children}
        </section>
    );
};

Section.defaultProps = {
    className:''
}

export default Section;
