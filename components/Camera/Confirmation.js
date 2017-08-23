import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Style/ConfirmationStyles'

class Confirmation extends React.Component {
  componentDidMount () {
  }

  render () {
    const navigate = this.props.navigation.navigate
    return (
      <View style={styles.container}>
        <Text style={styles.confirmation}>Corpse sent successfully!</Text>
        <Text style={styles.message}>Get excited, you will receive the final Exquisite Corpse back when complete</Text>
        <Button
          title='Back to Home'
          color='black'
          style={styles.button}
          onPress={() => {
            navigate('UserHomeScreen')
          }}
        />
      </View>
    )
  }
}

export default connect(null, null)(Confirmation)
