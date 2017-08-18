import React, { Component } from 'react'
import { View, Image, Text, Button } from 'react-native'
import {connect} from 'react-redux'
import { getPhoto, postNewPhoto, makeNewCorpe, makeNewAssign } from '../../store'
import Orientation from 'react-native-orientation'

class SendToFriends extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    Orientation.unlockAllOrientations()
  }

  render () {
    return (
      <View style={{display: 'flex'}}>
        <Image
          style={{height: '65%', width: '100%'}}
          source={{ uri: this.props.singlePhoto.path }}
          resizeMode={'contain'}
        />
        <View
          style={{height: '35%'}}>
          <View style={{flexGrow: 1}} />
          <Button
            title='send'
            color='#228b22'
            onPress={() => this.props.postPhoto(this.props.singlePhoto)}
          />
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

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: () => {
    dispatch(getPhoto())
  },
  postPhoto: (photoData) => {
    const userId = 1
    const corpse = {
      userId: userId,
      title: 'Testing'
    }
    dispatch(makeNewCorpe(corpse))
      .then((corpseId) => {
        const body = {
          cell: 'top',
          corpseId: corpseId,
          userId: userId
        }
        dispatch(postNewPhoto(photoData, body))
          .then((photo) => {
            console.log(photo.id)
            let cell = 'middle'
            if (photo.cell === 'middle') {
              cell = 'bottom'
            }
            const assign = {
              cell: cell,
              photoId: photo.id,
              assignorId: userId,
              assigneeId: userId,
              corpseId: corpseId
            }
            dispatch(makeNewAssign(assign))
          })
      })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SendToFriends)
