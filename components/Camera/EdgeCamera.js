import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { putPhoto } from '../../store'
import Camera from 'react-native-camera'
import {connect} from 'react-redux'
import Orientation from 'react-native-orientation'
import { imageUrl } from '../../store/url'
import Icon from 'react-native-vector-icons/FontAwesome'
import ImageResizer from 'react-native-image-resizer'
import styles from '../Style/EdgeCameraStyles'

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
          captureQuality={Camera.constants.CaptureQuality.medium}
          orientation={Camera.constants.Orientation.landscapeLeft}
        >
          <Image style={styles.edge}
            source={{uri: `${imageUrl}${assignment.corpseId}-${assignment.assignorId}-${cell}-edge.jpeg`}}
          />
          <Text style={styles.camblock} />
          <Icon name='camera' size={50} color={'#000000'}
            style={{padding: 10, margin: 20}}
            onPress={() => this.props.takePicture(camera)} />
        </Camera>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  takePicture (camera) {
    camera.capture()
      .then((data) => {
        ImageResizer.createResizedImage(data.path, 640, 480, 'JPEG', 100, 0)
          .then(res =>
            dispatch(putPhoto(res)))
        ownProps.navigation.navigate('NewCorpseScreen', { stack: 'edge', assignment: ownProps.navigation.state.params.assignment, cell: ownProps.navigation.state.params.cell })
      })
      .catch(err => console.error(err))
  }
})

export default connect(null, mapDispatchToProps)(EdgeCamera)
