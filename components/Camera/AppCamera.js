import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'
import { putPhoto } from '../../store'
import Camera from 'react-native-camera'
import {connect} from 'react-redux'
import Orientation from 'react-native-orientation'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImageResizer from 'react-native-image-resizer'

class AppCamera extends Component {
  componentDidMount () {
    Orientation.lockToLandscape()
  }

  render () {
    let camera
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            camera = cam
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureQuality={Camera.constants.CaptureQuality.medium}
        >
          <Text style={styles.edgeblock} />
          <Text style={styles.camblock} />
          <Icon name='camera' size={50} color={'#000000'}
            style={{padding: 10, margin: 20}}
            onPress={() => this.props.takePicture(camera)} />
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
        ImageResizer.createResizedImage(data.path, 640, 480, 'JPEG', 100)
          .then(res =>
            dispatch(putPhoto(res)),
          ownProps.navigation.navigate('NewCorpseScreen'))
          .catch(err => console.log(err, '-unable to resize'))
      })
      .catch(err => console.error(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppCamera)

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
  edgeblock: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    right: 0,
    left: 0,
    height: 20,
    justifyContent: 'space-between'
  },
  camblock: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    right: 0,
    left: 0,
    height: 215,
    justifyContent: 'space-between'
  }
})
