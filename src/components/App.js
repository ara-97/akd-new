import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAppsIfNeeded } from '../redux/actions'
import { Switch, Route, Link } from "react-router-dom";
import routes from "../routes";

const styles = {
  link: {
    margin: '0 30px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: 'rgb(118, 113, 255)',
    borderRadius: '5px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: '8px 10px',
    width: '120px',
    textAlign: 'center'
  }
}

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchAppsIfNeeded())
  }


  render() {
    const { isFetching, apps } = this.props
    let totalapps = apps.length;

    return (
      <div>
        {isFetching && apps.length === 0 && <h2>Loading...</h2>}
        {!isFetching && apps.length === 0 && <h2>Empty.</h2>}
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Switch>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </div>
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
