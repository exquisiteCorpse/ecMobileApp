import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Login from './Button/LoginButton'
import styles from './Style/AppWelcomeStyles'

export default class App extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        Welcome to Exquisite Corpse!</Text>
        <Login navigation={this.props.navigation}/>
      </View>
    )
  }
}
