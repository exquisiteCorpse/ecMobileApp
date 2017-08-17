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
import Login, { _fbAuth } from './Button/LoginButton'

export default class App extends Component {
  state = {
    user: undefined, // user has not logged in yet
  };

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  };

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Exquisite Corpse!</Text>
        <Login onPress={ this._fbAuth} />
      </View>
    )
  }
}

App.navigationOptions = ({ navigation }) => ({
  title: 'Welcome'
 })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
