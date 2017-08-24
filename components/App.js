import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Login from './Button/LoginButton'
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
          <Text style={styles.welcome}>Exquisite Corpse</Text>
          <Login />
        </View>
      </Image>
    )
  }
}
