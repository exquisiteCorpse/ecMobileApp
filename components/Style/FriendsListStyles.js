import React from 'react'
import { StyleSheet } from 'react-native'

const Roboto = 'Roboto-Regular'
const darkgrey = '#2d2f31'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    position: 'absolute',
    flexDirection: 'row',
    top: 60,
    left: 10,
    right: 10,
    justifyContent: 'center'
  },
  info: {
    flexDirection: 'row',
    left: 0,
    right: 0,
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Roboto,
    color: darkgrey
  },
  header: {
    width: '75%',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: Roboto,
    color: darkgrey,
    paddingBottom: 20
  },
  list: {
    alignItems: 'center',
    color: darkgrey,
    fontSize: 15,
    fontFamily: Roboto,
    paddingTop: 5
  },
  message: {
    alignItems: 'center',
    fontSize: 18,
    width: '75%',
    paddingBottom: 20,
    fontFamily: Roboto,
    color: darkgrey
  }
})

export default styles
