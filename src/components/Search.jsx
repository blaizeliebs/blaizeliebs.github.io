/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';

import styled from 'styled-components';
import { Input, Spinner } from 'reactstrap';

import ListRepo from './ListRepo';

const CenterdSpinner = styled(Spinner)`
  display: block;
  margin: 20px auto 0 auto;
  width: '3rem';
  height: '3rem';
`;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: {},
      loading: true,
      inputValue: '',
    };
  }

  getGitHub = () => {
    this.setState({ loading: true });
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.github.com/search/repositories?q=${this.state.inputValue}`,
        { credentials: 'same-origin' },
      )
        .then((response) => response.json())
        .then((data) => resolve(this.setState({ repos: data })))
        .then(() => this.setState({ loading: false }))
        .catch(reject);
    });
  };

  updateInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value,
    });
    setTimeout(() => this.getGitHub(), 2000);
  };

  UNSAFE_componentWillMount() {
    setTimeout(() => this.setState({ loading: false }), 1500);
  }

  render() {
    return (
      <Fragment>
        <h1>GitHub Repo Search</h1>
        <Input
          type="text"
          name="search"
          id="searchRepo"
          placeholder="type a repo name"
          value={this.state.inputValue}
          onChange={(evt) => this.updateInputValue(evt)}
        />
        {this.state.loading ? (
          <CenterdSpinner type="grow" />
        ) : (
          <ListRepo repos={this.state.repos} />
        )}
      </Fragment>
    );
  }
}

export default Search;
