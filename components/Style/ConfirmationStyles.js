import React from 'react'
import { StyleSheet } from 'react-native'

const Roboto = 'Roboto-Regular'

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
    color: 'black',
    paddingBottom: 20
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    width: '75%',
    paddingBottom: 20,
    fontFamily: Roboto,
    color: 'black'
  },
  button: {
    width: '30%'
  }
})

export default styles
