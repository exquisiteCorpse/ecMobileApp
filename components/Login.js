import React, { Component } from 'react'
import {Image,Linking, Platform,Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SafariView from 'react-native-safari-view'
import styles from './Style/LoginStyles.js'
const currentURL={
  ip:'https://192.168.1.4/auth/facebook',
  heroku: 'https://exquisitecorpse-fsa.herokuapp.com/auth/facebook'

}
export default class App extends Component {
  constructor() {
    super()
    this.state={
      user: undefined
    }
  }

  // Set up Linking
  componentDidMount() {
    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url })
      }
    })
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  handleOpenURL = ({ url }) => {
    // Extract stringified user string out of the URL
    const [, user_string] = url.match(/user=([^#]+)/);
    this.setState({
      // Decode the user string and parse it into JSON
      user: JSON.parse(decodeURI(user_string))
    })
    if (Platform.OS === 'ios') {
      SafariView.dismiss()
    }
  }

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL(currentURL.heroku)


  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  render() {
    const { user } = this.state;
    return (
      <View style={styles.container}>
        { user
          ? // Show user info if already logged in
            <View style={styles.content}>
              <Text style={styles.header}>
                Welcome {user.name}!
              </Text>
              <View style={styles.avatar}>
                <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
              </View>
            </View>
          : // Show Please log in message if not
            <View style={styles.content}>
              <Text style={styles.header}>
                Welcome to {"\n"}
                Exquisite Corpse!
              </Text>
              <View style={styles.avatar}>
                <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
              </View>
              <Text style={styles.text}>
                Please log in to continue
              </Text>
            </View>
        }
        {/* Login buttons */}
        <View style={styles.buttons}>
          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            onPress={this.loginWithFacebook}
            {...iconStyles}
          >
            Login with Facebook
          </Icon.Button>
        </View>
      </View>
    )
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};


