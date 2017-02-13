import React, { Component, PropTypes } from "react";

import { connect } from "react-redux";

import "./app.css";

class App extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="appContent">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

App.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return state
};

export default connect(mapStateToProps)(App);
