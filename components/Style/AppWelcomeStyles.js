import React from 'react'
import { StyleSheet } from 'react-native'

const font = 'sans-serif-thin'

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
    fontFamily: 'SedgwickAveDisplay-Regular',
    backgroundColor: 'white',

    fontSize: 35,
    color: 'black'
  },
  confirmation: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 20,
    fontFamily: font
  },
  message: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: font,
    fontWeight: '500',
    color: 'black'
  },
  button: {
    padding: 20
  }

})

export default styles
