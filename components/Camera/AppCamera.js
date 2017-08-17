import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import { putPhoto } from '../../store'
import Camera from 'react-native-camera'
import {connect} from 'react-redux'
import Orientation from 'react-native-orientation'

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
        >
          <Text style={styles.capture} onPress={() => this.props.takePicture(camera)} >[capture]</Text>
        </Camera>
      </View>
    )
  }
}

AppCamera.navigationOptions = ({ navigation }) => ({
  title: 'Camera'
})

const mapStateToProps = null
const mapDispatchToProps = (dispatch, ownProps) => ({
  takePicture (camera) {
    camera.capture()
      .then((data) => {
        dispatch(putPhoto(data))
        ownProps.navigation.navigate('NewCorpseScreen')
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
  }
})
