import React from 'react'
import { StyleSheet } from 'react-native'

const Roboto = 'Roboto-Regular'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  edge: {
    width: '100%',
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center'
  },
  imageEdgeTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 30
  },
  imageEdgeBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 30
  },
  touch: {
    width: '100%',
    alignItems: 'center'
  },
  viewEdge: {
    height: 20,
    width: '95%',
    alignItems: 'center'
  },
  titleCorpse: {
    fontSize: 18,
    fontFamily: Roboto,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  },
  textCorpse: {
    color: 'black',
    fontSize: 12,
    fontFamily: Roboto,
    marginRight: 10,
    paddingTop: 5
  }
})

export default styles
