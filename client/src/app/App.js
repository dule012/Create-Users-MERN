import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './home/home'
import NewUser from './newUser/newUser'
import Header from './partials/header'
import Edit from './edit/edit'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path='/newuser' component={NewUser} />
          <Route path='/edit/:id' component={Edit} />
          <Route path='/home' component={Home} />
          <Route path='*' render={() => <Redirect to={'/home'} />} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
