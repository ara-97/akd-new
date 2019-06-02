import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from "react-router-dom";
import Routes from '../Routes';


class App extends Component {

  render() {

    return (
      <Switch>
        {
          Routes.map(route => <Route key={route.path} {...route} />)
        }
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  const { isFetching, apps } = state

  return {
    isFetching,
    apps
  }
}

export default connect(mapStateToProps)(App)
