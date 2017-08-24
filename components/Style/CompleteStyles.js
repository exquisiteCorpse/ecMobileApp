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
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    paddingBottom: 20,
    fontFamily: Roboto,
    color: darkgrey
  },
  option: {
    width: '100%',
    alignItems: 'center'
  }
})

export default styles
