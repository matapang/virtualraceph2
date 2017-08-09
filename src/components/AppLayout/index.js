/**
*
* AppLayout
*
*/

import React from 'react';
import {PropTypes} from 'prop-types';
import styled from 'styled-components';
import Footer from '../Footer';

const ContentWrapper = styled.div`    
  margin: 0;
  max-width:992px;
  margin:auto;
`;
class AppLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {

  }

  render() {
    const {hideFooter} = this.props;
    return (
        <div>          
          <ContentWrapper style={{padding:5}} >            
               {this.props.children}            
          </ContentWrapper>
          {!hideFooter && <Footer/>}
        </div>
    );
  }
}

AppLayout.defaultProps = {
  hideFooter:false
}

AppLayout.propTypes = {
  hideFooter:PropTypes.bool
};

export default AppLayout;
