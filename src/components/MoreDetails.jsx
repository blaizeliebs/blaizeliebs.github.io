import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';
import ReactMinimalPieChart from 'react-minimal-pie-chart';

import getGitHubIssues from '../helpers/getGitHubIssues';
import Tabs from './TabedIssues';

const CenterRow = styled(Row)`
  align-items: center;
  justify-content: center;
  background: none;
  border-radius: 30px;
  margin-top: 10px;
  padding: 5px;
  ${(props) => {
    if (props.background) {
      return `
        background-color: rgb(242, 242, 236);
      `;
    }
  }}
`;

const Key = styled.div`
  display: table-cell;
  float: left;
  padding: 10px;
  font-size: 12px;
  left: 0;
  border-radius: 15px;
  margin-bottom: 10px;
  text-align: center;
  ${(props) => {
    if (props.color) {
      return `
        background-color: ${props.color};
      `;
    }
  }}
  &:before {
    ${(props) => {
      if (props.title) {
        return `
        display: block;
        content: '${props.title} Issues';
        float: left;
        color: black;
      `;
      }
    }}
  }
`;

class MoreDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: {
        value: {},
        items: {},
      },
    };
  }

  componentDidMount() {
    const { repoName } = this.props;

    this.extractPromise(repoName).then((issues) =>
      this.setState({
        issues,
      }),
    );
  }

  extractPromise = (repoName) => {
    return getGitHubIssues(repoName);
  };

  render() {
    const { openCount, repoIssuesUrl } = this.props;
    const { value } = this.state.issues;
    const { items } = this.state.issues.value;

    return (
      <Fragment>
        <CenterRow>
          <Col md="2">
            <Key
              color="#E38627"
              title={`OPEN (${openCount})`}
            />
            <Key
              color="#C13C37"
              title={`CLOSED (${value.total_count - openCount})`}
            />
          </Col>
          <Col md="4">
            <ReactMinimalPieChart
              animate={true}
              animationDuration={500}
              animationEasing="ease-out"
              cx={50}
              cy={50}
              data={[
                {
                  color: '#E38627',
                  title: 'OPEN',
                  value: openCount,
                },
                {
                  color: '#C13C37',
                  title: 'CLOSED',
                  value: value.total_count - openCount,
                },
              ]}
              label
              labelPosition={60}
              labelStyle={{
                fontFamily: 'sans-serif',
                fontSize: '5px',
              }}
              lengthAngle={360}
              lineWidth={20}
              onClick={undefined}
              onMouseOut={undefined}
              onMouseOver={undefined}
              paddingAngle={18}
              radius={50}
              rounded
              startAngle={0}
              viewBoxSize={[100, 100]}
            />
          </Col>
        </CenterRow>
        <CenterRow>
          <Col>
            <Tabs issues={items} issuesUrl={repoIssuesUrl} />
          </Col>
        </CenterRow>
      </Fragment>
    );
  }
}
export default MoreDetails;
