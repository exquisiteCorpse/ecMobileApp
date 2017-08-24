import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { putPhoto } from '../../store'
import Camera from 'react-native-camera'
import {connect} from 'react-redux'
import Orientation from 'react-native-orientation'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImageResizer from 'react-native-image-resizer'
import styles from '../Style/AppCameraStyles'

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
          orientation={Camera.constants.Orientation.landscapeLeft}
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
        ImageResizer.createResizedImage(data.path, 640, 480, 'JPEG', 100, 0)
          .then(res =>
            dispatch(putPhoto(res)),
          ownProps.navigation.navigate('NewCorpseScreen', {stack: 'new'}))
          .catch(err => console.log(err, '-unable to resize'))
      })
      .catch(err => console.error(err))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppCamera)
