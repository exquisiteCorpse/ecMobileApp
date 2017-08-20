import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'
import { putPhoto } from '../../store'
import Camera from 'react-native-camera'
import {connect} from 'react-redux'
import Orientation from 'react-native-orientation'
import { imageUrl } from '../../store/url'

class EdgeCamera extends Component {
  componentDidMount () {
    Orientation.lockToLandscape()
  }

  render () {
    const { assignment, cell } = this.props.navigation.state.params
    let camera
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => { camera = cam }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
        >
          <Image style={styles.edge}
            source={{uri: `${imageUrl}${assignment.corpseId}-${assignment.assignorId}-${cell}-edge.jpeg`}}
          />
          <Text style={styles.capture} onPress={() => this.props.takePicture(camera)} >[capture]</Text>
        </Camera>
      </View>
    )
  }
}

const mapStateToProps = null
const mapDispatchToProps = (dispatch, ownProps) => ({
  takePicture (camera) {
    camera.capture()
      .then((data) => {
        dispatch(putPhoto(data))
        ownProps.navigation.navigate('NewCorpseScreen', { assignment: ownProps.navigation.state.params.assignment, cell: ownProps.navigation.state.params.cell })
      })
      .catch(err => console.error(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EdgeCamera)

const styles = StyleSheet.create({
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  edge: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    right: 0,
    left: 0,
    height: 10,
    justifyContent: 'space-between'
  }
})
