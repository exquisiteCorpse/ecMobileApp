import React from 'react'
import { StyleSheet } from 'react-native'

const font = 'sans-serif-thin'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: font
  },
  list: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    fontFamily: font,
    padding: 5
  }

})

export default styles
