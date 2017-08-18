import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { imageUrl } from '../../store/url'

/* -----------------    COMPONENT     ------------------ */

const PhotoEdgeItem = (props) => {
  const { photo } = this.props

  return (
    <View key={photo.id}>
      <Image
        style={styles.corpseEdge}
        source={{uri: `${imageUrl}/${photo.edgeUrl}`}}
      />
    </View>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(PhotoEdgeItem)

const styles = StyleSheet.create({
  corpseEdge: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    right: 0,
    left: 0,
    height: 50,
    justifyContent: 'space-between'
  }
})
