import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  corpse: {
    width: 360,
    height: 420,
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center'
  },
  imageCorpseTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 30

  },
  imageCorpseBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    height: 30,
    paddingTop: 10

  },
  viewCorpse: {
    width: '100%',
    height: 360,
    alignItems: 'center'
  },
  textLikedCorpse: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: 'black'
  },
  titleCorpse: {
    fontWeight: 'bold'
  }
})

export default styles
