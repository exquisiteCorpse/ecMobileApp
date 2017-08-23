import React from 'react'
import { StyleSheet } from 'react-native'

const darkgrey = '#2d2f31'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 100,
    height: 60,
    alignItems: 'center',
    backgroundColor: darkgrey
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default styles
