import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import { getPhoto, postNewPhoto } from '../store'

// uri is link to asset-library://

class NewCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    console.log(this.props)
  }
  render () {
    return (
      <View>
        <Image
          style={{width: 400, height: 300}}
          source={{uri: this.props.singlePhoto.path}}
        />
        <Text onPress={() => this.props.postPhoto(this.props.singlePhoto)} >[send]</Text>
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhoto: () => {
    dispatch(getPhoto())
  },
  postPhoto: (photoData) => {
    dispatch(postNewPhoto(photoData))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCorpse)
