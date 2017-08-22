import React from 'react'
import { StyleSheet } from 'react-native'

const font = 'SedgwickAveDisplay-Regular'
const Amatca = 'AmaticaSC-Regular'
const AmatcaB = 'AmaticaSC-Bold'

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
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  welcome: {
    fontFamily: font,
    fontSize: 50,
    color: 'black'
  },
  confirmation: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: font,
    color: 'black',
    paddingBottom: 20
  },
  message: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: AmatcaB,
    color: 'black',
    paddingBottom: 20
  },
  button: {
    padding: 20
  }

})

export default styles
