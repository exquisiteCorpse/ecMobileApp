import React from 'react'
import { StyleSheet } from 'react-native'

const Roboto = 'Roboto-Regular'
const darkgrey = '#2d2f31'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  confirmation: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Roboto,
    color: darkgrey,
    paddingBottom: 20
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    width: '75%',
    paddingBottom: 20,
    fontFamily: Roboto,
    color: darkgrey
  },
  button: {
    width: '30%'
  }
})

export default styles
