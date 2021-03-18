import React, { Component } from "react";
import { connect } from "react-redux";
import QuizInfo from "./QuizInfo";
import { thunk_action_creator } from "./actions/fetchAction";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(thunk_action_creator());
  }

  render() {
    return (
      <div className="container">
        {this.props.data.isFetching ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : null}
        {Object.keys(this.props.data.userData).length > 0 ? (
          <QuizInfo user={this.props.data.userData} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state
  };
};
export default connect(mapStateToProps)(App);
