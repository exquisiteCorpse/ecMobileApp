import React, { Component } from 'react'
import { View, Image } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto } from '../store'
import Orientation from 'react-native-orientation'

class NewCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    // Orientation.unlockAllOrientations()
    // this works to unlock landscape, but if you hit back button to camera the orientation does not re-lock
  }
  render () {
    return (
      <View>
        <Image
          style={{width: 400, height: 300}}
          source={{uri: this.props.singlePhoto.path}}
        />
      </View>
    )
  }
}

NewCorpse.navigationOptions = ({ navigation }) => ({
  title: 'New Corpse'
})

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

export default connect(mapStateToProps, mapDispatchToProps)(NewCorpse)
