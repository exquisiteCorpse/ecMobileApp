import React from 'react'
import { StyleSheet } from 'react-native'

const Roboto = 'Roboto-Regular'
const darkgrey = '#2d2f31'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  corpse: {
    width: '100%',
    height: 460,
    alignItems: 'center'
  },
  imageCorpseTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 50,
    marginTop: 20
  },
  imageCorpseBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 30,
    paddingTop: 10,
    marginBottom: 10
  },
  viewCorpse: {
    width: '95%',
    height: 360,
    alignItems: 'center',
    marginTop: 5
  },
  textLikedCorpse: {
    fontFamily: Roboto,
    color: darkgrey,
    marginLeft: 10
  },
  titleCorpse: {
    fontSize: 18,
    fontFamily: Roboto,
    fontWeight: 'bold',
    color: darkgrey,
    marginLeft: 10
  },
  textCorpse: {
    color: darkgrey,
    fontSize: 12,
    fontFamily: Roboto,
    marginRight: 10,
    paddingTop: 5
  }
})

export default styles
