import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import store from './store'
import AppNav from './components/AppNav'
import App from './components/App'

export default class ecMobileApp extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppNav>
          <App />
        </AppNav>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ecMobileApp', () => ecMobileApp)
