import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Style/AppWelcomeStyles'

class Confirmation extends React.Component {
  componentDidMount () {

  }

  render () {
    const navigate = this.props.navigation.navigate
    return (
      <View style={styles.container2}>
        <Text style={styles.welcome}>Corpse sent successfully!</Text>
        <Text>Get excited, you will receive the final Exquisite Corpse back when complete</Text>
        <Button
          title='Back to Home'
          color='#1e90ff'
          onPress={() => {
            navigate('UserHomeScreen')
          }}
        />
      </View>
    )
  }
}

export default connect(null, null)(Confirmation)
