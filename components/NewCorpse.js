import React, { Component } from 'react'
import { View, Image } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto } from '../store'

class NewCorpse extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
  }

  render () {
    return (
      <View>
        <Image
          style={{width: 400, height: 300}}
          source={{uri: this.props.singlePhoto.path}}
        />
        <Text>Approve?</Text><Text>Re-take</Text>
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
