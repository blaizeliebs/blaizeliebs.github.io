import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
import styled from 'styled-components';
import classnames from 'classnames';

const HoldIssues = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const Tabs = (props) => {
  const { issues, issuesUrl } = props;
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}
          >
            All Issues
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}
          >
            Open Issues
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => {
              toggle('3');
            }}
          >
            Closed Issues
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <HoldIssues>
                <h4>All Known Issues</h4>
                <ul>
                  {_.map(issues, (item, index) => (
                    <li key={index}>
                      {item.title}{' '}
                      <a
                        href={item.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Issue"
                      >
                        View Issue
                      </a>
                    </li>
                  ))}
                  <a
                    href={issuesUrl}
                    className="btn btn-primary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View ALL Issue"
                  >
                    View ALL Issue
                  </a>
                </ul>
              </HoldIssues>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <HoldIssues>
                <h4>All Open Issues</h4>
                <ul>
                  {_.map(_.filter(issues, { state: 'open' }), (item, index) => (
                    <li key={index}>
                      {item.title}{' '}
                      <a
                        href={item.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Issue"
                      >
                        View Issue
                      </a>
                    </li>
                  ))}
                  <a
                    href={`${issuesUrl}?q=is%3Aopen+is%3Aissue`}
                    className="btn btn-primary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View OPEN Issue"
                  >
                    View OPEN Issue
                  </a>
                </ul>
              </HoldIssues>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="12">
              <HoldIssues>
                <h4>All Closed Issues</h4>
                <ul>
                  {_.map(
                    _.filter(issues, { state: 'closed' }),
                    (item, index) => (
                      <li key={index}>
                        {item.title}{' '}
                        <a
                          href={item.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View Issue"
                        >
                          View Issue
                        </a>
                      </li>
                    ),
                  )}
                  <a
                    href={`${issuesUrl}?q=is%3Aissue+is%3Aclosed`}
                    className="btn btn-primary btn-block"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View CLOSED Issue"
                  >
                    View CLOSED Issue
                  </a>
                </ul>
              </HoldIssues>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};

Tabs.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  issues: PropTypes.object,
  issuesUrl: PropTypes.string,
};

Tabs.defaultProps = {
  issues: '',
  issuesUrl: '',
};

export default Tabs;
