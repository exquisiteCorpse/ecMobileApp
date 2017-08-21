import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  Platform, } from 'react-native'
//import FBSDK, { LoginManager } from 'react-native-fbsdk'
import Login, { _fbAuth } from './Button/LoginButton'
//import Login from './Login'
import styles from './Style/AppWelcomeStyles'
import Orientation from 'react-native-orientation'

export default class App extends Component {
  componentDidMount () {
    Orientation.unlockAllOrientations()
  }

  render () {
    return (
      <Image source={require('../public/images/guy.jpg')} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.test}>Exquisite Corpse</Text>
          <Login/>
        </View>
      </Image>
    )
  }
}

// <Login onPress={ this._fbAuth} />
