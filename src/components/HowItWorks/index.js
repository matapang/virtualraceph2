import React from 'react';
import Section from '../Section';

class HowItWorks extends React.Component {
    componentDidMount() {

        window.sr.reveal(this.refs.join, { duration: 2000 });
        
        window.sr.reveal(this.refs.race, { duration: 2000 });
        
        window.sr.reveal(this.refs.medal, { duration: 200 });

    }

    render() {
        return (
            <Section id="team" title="How it Works">
                <div style={{ padding: 20 }} className="bg-info">
                    <div className="row">
                        <div className="col-sm-4" ref="join">

                            <i className="fa fa-user fa-5x" />
                            <div>Join a race</div>
                        </div>
                        <div className="col-sm-4" ref="race">

                            <i className="fa fa-map-o fa-5x" />
                            <div>Track a race</div>
                        </div>
                        <div className="col-sm-4" ref="medal">

                            <i className="fa fa-star-o fa-5x" />
                            <div>Earn Medal</div>
                        </div>
                    </div>


                </div>
            </Section>
        );
    }
};

export default HowItWorks;