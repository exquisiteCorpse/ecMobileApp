import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import styles from '../Style/ConfirmationStyles'
import { NavigationActions } from 'react-navigation'

const Confirmation = (props) => {
  let routePath = 'UserHomeScreen'
  if (props.navigation.state.params.stack === 'edge') { routePath = 'UserEdgesScreen' }

  return (
    <View style={styles.container}>
      <Text style={styles.confirmation}>Corpse sent successfully!</Text>
      <Text style={styles.message}>Get excited, you will receive the final Exquisite Corpse back when complete</Text>
      <Button
        title='Make Another Corpse'
        color='black'
        style={styles.button}
        onPress={() => {
          const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: routePath })
            ]
          })
          props.navigation.dispatch(resetAction)
        }}
      />
    </View>
  )
}

export default connect(null, null)(Confirmation)
