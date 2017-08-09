/**
*
* AppLayout
*
*/

import React from 'react';
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
    return (
        <div>          
          <ContentWrapper style={{padding:5}} >            
               {this.props.children}            
          </ContentWrapper>
          <Footer/>
        </div>
    );
  }
}

AppLayout.propTypes = {

};

export default AppLayout;
