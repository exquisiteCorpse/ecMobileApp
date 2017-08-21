import React from 'react'
import { StyleSheet } from 'react-native'

const jBold = 'JosefinSlab-Bold'
const jReg = 'JosefinSlab-Regular'
const calig = 'Calligraffitti-Regular'
const Amatca = 'AmaticaSC-Regular'
const AmatcaB = 'AmaticaSC-Bold'
const fontBold = jBold
const fontReg = jReg
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
    width: '100%',
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
    fontFamily: fontReg,
    color: 'black'
  },
  titleCorpse: {
    fontSize: 25,
    fontFamily: AmatcaB,
    color: 'black',
    marginLeft: 10
  },
  textCorpse: {
    color: '#2f4f4f',
    fontSize: 15,
    fontFamily: Amatca,
    marginRight: 10
  }
})

export default styles
