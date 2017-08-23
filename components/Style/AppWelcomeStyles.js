import React from 'react'
import { StyleSheet } from 'react-native'

const font = 'SedgwickAveDisplay-Regular'
const darkgrey = '#2d2f31'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    flex: 1,
    resizeMode: 'stretch',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  welcome: {
    fontFamily: font,
    fontSize: 50,
    color: darkgrey
  },
  message: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: font,
    color: darkgrey
  },
  button: {
    padding: 20
  }
})

export default styles
