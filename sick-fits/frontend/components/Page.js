import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background: red;
  font-size: ${props => (props.huge ? '100px' : '50px')};
  span {
    font-size: 100px;
  }
`;

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton huge>
          Click
          <span>💩</span>
        </MyButton>
        <MyButton>
          Click
          <span>💩</span>
        </MyButton>
        {this.props.children}
      </div>
    )
  }
}