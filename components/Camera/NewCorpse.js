import React, { Component } from 'react'
import { View, Image, Text, Button, StyleSheet } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto } from '../../store'
import { imageUrl } from '../../store/url'
import Orientation from 'react-native-orientation'

class NewCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    Orientation.lockToLandscape()
  }

  render () {
    const navigate = this.props.navigation.navigate
    let navToScreen = 'AppCameraScreen'
    let sendToFriendsNav = 'SendToFriendsScreen'
    let edge = null
    let retakeParams = null
    let assignmentParams = null
    let imageStyle = styles.image
    if (this.props.navigation.state.params) {

      const {assignment, cell} = this.props.navigation.state.params

      if (assignment) {
        imageStyle = styles.imageEdge
        edge = (
          <Image
            style={styles.edge}
            source={{uri: `${imageUrl}${assignment.corpseId}-${assignment.assignorId}-${cell}-edge.jpeg`}}
          />
        )
        assignmentParams = {assignment: assignment}
        navToScreen = 'EdgeCameraScreen'
        retakeParams = this.props.navigation.state.params
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.captured}>
          {edge}
          <Image
            style={imageStyle}
            source={{ uri: this.props.singlePhoto.uri }}
          />
          <View style={styles.button}>
            <Button
              title='Approve'
              color='#228b22'
              onPress={() => {
                navigate(sendToFriendsNav, assignmentParams)
              }}
            />
            <Button
              title='Re-take'
              color='#8b0000'
              onPress={() => {
                navigate(navToScreen, retakeParams)
              }}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  captured: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'space-between'
  },
  imageEdge: {
    position: 'absolute',
    flexDirection: 'row',
    top: 10,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'space-between'
  },
  button: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center'
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

const mapStateToProps = (state) => {
  return {
    singlePhoto: state.singlePhoto
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhoto: () => {
    dispatch(getPhoto())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCorpse)
