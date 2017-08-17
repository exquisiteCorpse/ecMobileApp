import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto } from '../../store'
import Orientation from 'react-native-orientation'

class SendToFriends extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    Orientation.unlockAllOrientations()
  }

  render () {
    return (
      <Text>Send To Friends page</Text>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    singlePhoto: state.singlePhoto
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: () => {
    dispatch(getPhoto())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SendToFriends)
