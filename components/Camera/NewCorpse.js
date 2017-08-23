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
    let edge = (<Text style={styles.edgeblock} />)
    let retakeParams = null
    let assignmentParams = null
    let source = this.props.singlePhoto.uri

    if (this.props.navigation.state.params) {
      const {assignment, cell} = this.props.navigation.state.params
      if (assignment) {
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
            style={styles.image}
            source={{ uri: source }}
          />
          <Text style={styles.camblock} />
          <View style={styles.options}>
            <View style={styles.optionButtons}>
              <Button
                title='Approve'
                color='black'
                onPress={() => {
                  navigate(sendToFriendsNav, assignmentParams)
                }}
              />
            </View>
            <View style={styles.optionButtons}>
              <Button
                title='Re-take'
                color='black'
                onPress={() => {
                  navigate(navToScreen, retakeParams)
                }}
              />
            </View>
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
    top: 20,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'space-between'
  },
  edge: {
    position: 'absolute',
    flexDirection: 'row',
    top: 0,
    right: 0,
    left: 0,
    height: 20,
    justifyContent: 'space-between'
  },
  options: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 40,
    left: 0,
    right: 0,
    justifyContent: 'center'
  },
  optionButtons: {
    marginLeft: 10,
    marginRight: 10,
    width: '30%'
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
