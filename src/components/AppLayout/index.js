/**
*
* AppLayout
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';

const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;

const ContentWrapper = styled(Content)`    
  margin: 0;
  overflow:auto;
  margin-bottom:64px;
  
`;
class AppLayout extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {

  }

  render() {
    return (
        <Layout style={{overflow:'hidden', marginTop:-20, marginBottom:-20}}>          
          <ContentWrapper style={{padding:5}} >            
               {this.props.children}            
          </ContentWrapper>
        </Layout>
    );
  }
}

AppLayout.propTypes = {

};

export default AppLayout;
