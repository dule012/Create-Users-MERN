import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Table from './table/table'
import NewUser from './newUser/newUser'
import Header from './partials/header'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/newUser' component={NewUser} />
          <Route path='/' component={Table} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
