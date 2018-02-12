import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

export function RequireAuth(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push("/");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool
  };

  function mapStateToProps(state) {
    return {
      authenticated: state.user.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}
