import React from 'react'
import { StyleSheet } from 'react-native'

const Roboto = 'Roboto-Regular'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    paddingBottom: 20,
    fontFamily: Roboto,
    color: 'black'
  },
  option: {
    width: '100%',
    alignItems: 'center'
  }
})

export default styles
