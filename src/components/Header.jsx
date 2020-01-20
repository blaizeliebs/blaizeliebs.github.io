/**
 * Link is default with GatsbyJS but I can only assume it is the same as `react-router`
 * I have not had the time to break it down yet and only using it here
 * N.B I took the compnay logo :)
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderWapper = styled.header`
  background: black;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  height: 110px;
`;

const HeaderImage = styled.img`
  float: left;
  margin: 15px 20px;
  width: 100px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
  float: right;
`;

const Link = styled.a`
  color: #ffffff;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <HeaderWapper>
    <HeaderContainer>
      <HeaderImage
        src="https://fethr.aero/img/fethr/logo.svg"
        title={siteTitle}
      />
      <HeaderTitle>
        <Link href="/" alt={siteTitle}>
          {siteTitle}
        </Link>
      </HeaderTitle>
    </HeaderContainer>
  </HeaderWapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
