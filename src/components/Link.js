import React from 'react';

export default class Link extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} linked</h1>;
  }
}