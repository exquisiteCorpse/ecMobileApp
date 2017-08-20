import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends, getPhoto, postNewPhoto, makeNewCorpe, makeNewAssign } from '../../store'
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import styles from '../Style/FriendsListStyles'

class UserFriends extends Component {
  componentDidMount () {
    this.props.fetchPhoto()
    this.props.fetchFriendsData()
  }

  render () {
    const { friends } = this.props
    const { singlePhoto } = this.props
    const { corpseTitle } = this.props
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ fontSize: 15 }}>{`Choose friend to send ${corpseTitle} to:`}</Text>
          {friends && friends.map(friend => {
            return (
              <TouchableOpacity
                key={friend.id}
                onPress={() => this.props.postPhoto(singlePhoto, friend.id)}>
                <Text>
                  {friend.username} | {friend.email}
                </Text>
              </TouchableOpacity>)
          })}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    singlePhoto: state.singlePhoto
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchFriendsData: () => {
    dispatch(fetchFriends())
  },
  fetchPhoto: () => {
    dispatch(getPhoto())
  },
  postPhoto: (photoData, assigneeId) => {
    const userId = 1
    const corpse = {
      userId: userId,
      title: ownProps.corpseTitle
    }
    if (ownProps.corpseInfo) {
      dispatch(postNewPhoto(photoData, ownProps.corpseInfo))
        .then((photo) => {
          let cell = ownProps.corpseInfo.cell
          if (photo.cell === 'middle') {
            cell = 'bottom'
          }
          const assign = {
            cell: cell,
            photoId: photo.id,
            assignorId: userId,
            assigneeId: assigneeId,
            corpseId: ownProps.corpseInfo.corpseId
          }
          dispatch(makeNewAssign(assign))
        })
    } else {
      dispatch(makeNewCorpe(corpse))
        .then((corpseId) => {
          const body = {
            cell: 'top',
            corpseId: corpseId,
            userId: userId
          }
          dispatch(postNewPhoto(photoData, body))
            .then((photo) => {
              let cell = 'middle'
              if (photo.cell === 'middle') {
                cell = 'bottom'
              }
              const assign = {
                cell: cell,
                photoId: photo.id,
                assignorId: userId,
                assigneeId: assigneeId,
                corpseId: corpseId
              }
              dispatch(makeNewAssign(assign))
            })
        })
    }
    ownProps.navigate('ConfirmationScreen')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends)
