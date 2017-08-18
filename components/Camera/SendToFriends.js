import React, { Component } from 'react'
import { View, Image, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { getPhoto } from '../../store'
import Orientation from 'react-native-orientation'
import UserFriends from '../User/UserFriends'
import styles from '../Style/FriendsListStyles'

class SendToFriends extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    Orientation.unlockAllOrientations()
  }

  render () {
    const { navigate } = this.props.navigation
    const corpseInfo = this.props.navigation.state.params
    return (
      <View style={{ display: 'flex' }}>
        <Image
          style={{ height: '65%', width: '100%' }}
          source={{ uri: this.props.singlePhoto.path }}
          resizeMode={'contain'}
        />
        <View>
          <TextInput
            defaultValue={'Enter Corpse Title'}
          />
        </View>
        <View style={styles.container}>
          <Text style={{ fontSize: 20 }}>Choose Wisely...</Text>
          <UserFriends
            navigate={navigate}
            corpseInfo={corpseInfo}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchPhoto: () => {
    dispatch(getPhoto())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SendToFriends)

/*

   <Button
            title='send'
            color='#228b22'
            onPress={() => {
              this.props.postPhoto(this.props.singlePhoto)
              this.props.navigation.navigate('ConfirmationScreen')
            }}
          />


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
    ownProps.navigation.navigate('ConfirmationScreen')
  }
*/
