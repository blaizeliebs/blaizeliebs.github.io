/* eslint-disable react/jsx-fragments */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/**
 * GlobalStyles are called on this
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './header';

import { GlobalStyles } from './GlobalStyles';

const GlobalStyle = createGlobalStyle`${GlobalStyles}`;

const Wapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

/**
 * previous was :
 * const Layout = ({ children }) => {
 * linting rule :
 * Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.eslint(arrow-body-style)
 */
const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <Header siteTitle="Black Swan Test" />
    <Wapper>
      <main>{children}</main>
      <footer>©{new Date().getFullYear()}</footer>
    </Wapper>
  </Fragment>
);

// children need to always be required as this is a `wrapping` function
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
