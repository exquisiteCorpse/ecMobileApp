import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  Platform, } from 'react-native'
import FBSDK, { LoginManager } from 'react-native-fbsdk'
// import Login, { _fbAuth } from './Button/LoginButton'
import Login from './Login'
import styles from './Style/AppWelcomeStyles'

export default class App extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    )
  }
}

// <Login onPress={ this._fbAuth} />
