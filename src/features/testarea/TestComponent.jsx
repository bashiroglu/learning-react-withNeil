import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>hello </h1>
        <h1>hello {this.props.data} </h1>
        <h1>hello {this.props.data} </h1>
        <h1>hello {this.props.data} </h1>
      </div>
    );
  }
}
const MapStateToProps = state => ({
  data: state.data
});

export default connect(MapStateToProps)(TestComponent);
