import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends, getPhoto, postNewPhoto, makeNewCorpe, makeNewAssign, updateStatusAssignments, dropAssignment } from '../../store'
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import styles from '../Style/FriendsListStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

class UserFriends extends Component {
  componentDidMount () {
    this.props.fetchData(this.props.dbUser.id)
  }

  render () {
    const { friends, singlePhoto, dbUser } = this.props
    if (!friends.length) {
      return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.header}>{`Until we integrate the addFriend component...`}<Icon name='wrench' size={25} /></Text>
            <TouchableOpacity
              onPress={() => this.props.postPhoto(singlePhoto, dbUser.id, dbUser.id)}>
              <Text style={styles.list} >
                {dbUser.username}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )
    } else {
      return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.header}>{`Select a friend to play next! Choose wisely...`}</Text>
            {friends && friends.map(friend => {
              return (
                <TouchableOpacity key={friend.id}
                  onPress={() => this.props.postPhoto(singlePhoto, friend.id, dbUser.id)}>
                  <Text style={styles.list} >
                    {friend.username}
                  </Text>
                </TouchableOpacity>)
            })}
          </View>
        </ScrollView>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    singlePhoto: state.singlePhoto,
    dbUser: state.dbUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchData: (id) => {
    dispatch(fetchFriends(id))
  },
  postPhoto: (photoData, assigneeId, userId) => {
    const corpse = {
      userId: userId,
      title: ownProps.corpseTitle
    }
    if (ownProps.corpseInfo) {
      const corpseInfo = ownProps.corpseInfo
      const body = {
        corpseId: corpseInfo.corpseId,
        userId: corpseInfo.assigneeId,
        cell: ownProps.cell
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
            corpseId: corpseInfo.corpseId
          }
          dispatch(makeNewAssign(assign))
            .then(() => {
              dispatch(dropAssignment({ id: corpseInfo.id, complete: true }))
              dispatch(updateStatusAssignments(corpseInfo.id, { complete: true }))
            })
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
    ownProps.navigate('ConfirmationScreen', {stack: ownProps.stack})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends)

