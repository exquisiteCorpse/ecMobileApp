import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto } from '../../store'
import { imageUrl } from '../../store/url'
import Orientation from 'react-native-orientation'
import styles from '../Style/NewCorpseStyles'

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
      const {assignment, cell, stack} = this.props.navigation.state.params
      if (assignment) {
        edge = (
          <Image
            style={styles.edge}
            source={{uri: `${imageUrl}${assignment.corpseId}-${assignment.assignorId}-${cell}-edge.jpeg`}}
          />
        )
        assignmentParams = {assignment: assignment, cell: cell, stack: stack}
        navToScreen = 'EdgeCameraScreen'
        retakeParams = this.props.navigation.state.params
      } else {
        assignmentParams = {stack: stack}
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.captured}>
          <Image
            style={styles.image}
            source={{ uri: source }}
          />
          {edge}
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
