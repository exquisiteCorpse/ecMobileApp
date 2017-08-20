import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  edge: {
    width: 360,
    height: 50,
    marginTop: 15,
    marginBottom: 15,
    alignItems: 'center'
  },
  imageEdgeTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
    height: 30
  },
  imageEdgeBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 360,
    height: 30
  },
  viewEdge: {
    height: 20,
    width: 600,
    alignItems: 'center'
  },
  titleCorpse: {
    fontWeight: 'bold'
  }
})

export default styles
