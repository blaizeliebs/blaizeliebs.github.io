/* eslint-disable import/no-named-as-default */
import React, { Component, Fragment } from 'react';

import Header from 'Header';
import Search from 'Search';

// importing bootstrap css as this is the base for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import styled, { createGlobalStyle } from 'styled-components';
import { GlobalStyles } from 'GlobalStyles';

const GlobalStyle = createGlobalStyle`${GlobalStyles}`;

const Wapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

class MyContainerApp extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header siteTitle="Black Swan Test" />
        <Wapper>
          <Search />
          <footer>©{new Date().getFullYear()}</footer>
        </Wapper>
      </Fragment>
    );
  }
}

export default MyContainerApp;