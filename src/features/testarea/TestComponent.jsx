import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './testActions';

export class TestComponent extends Component {
  render() {
    const { increment, decrement, data } = this.props;
    return (
      <div>
        <h1>hello </h1>
        <h1 onClick={increment}>increment </h1>
        <h1 onClick={decrement}>decrement </h1>
        <h1>hello {data} </h1>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  data: state.data
});
const MapDispatchToProps = {
  increment,
  decrement
};

export default connect(MapStateToProps, MapDispatchToProps)(TestComponent);
