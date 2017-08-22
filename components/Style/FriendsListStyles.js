import React from 'react'
import { StyleSheet } from 'react-native'

const font = 'sans-serif-thin'
const AmatcaB = 'AmaticaSC-Bold'
const AmatcaR = 'AmaticaSC-Regular'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',

  },
  header: {
    color: 'black',
    fontSize: 30,
    fontFamily: AmatcaB
  },
  list: {
    color: 'black',
    fontSize: 25,
    fontFamily: AmatcaR,
    padding: 5
  }

})

export default styles
