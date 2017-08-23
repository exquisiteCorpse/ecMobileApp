import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider, connect } from 'react-redux'
import store from './store'
//import Data from './components/Data'
import AppNav from './components/AppNav'
import App from './components/App'

const NavContainer = connect((state) => ({ fbUser: state.fbUser }))((props) => {
  if (props.fbUser.id) {
    return (
      <AppNav screenProps={props.fbUser}>
        <App />
      </AppNav>
    )
  } else {
    return (
      <App />
    )
  }
})

export default class ecMobileApp extends Component {

  render () {
    return (
      <Provider store={store}>
        <NavContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ecMobileApp', () => ecMobileApp)
