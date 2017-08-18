import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../../store'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'

class UserFriends extends Component {
  componentDidMount () {
    this.props.fetchFriendsData()
  }
  render () {
    const friends = this.props.friends
    console.log('**************', friends)
    return (
      <ScrollView>
        <View>
          { friends && friends.map(friend => {
            return (<Text key={friend.id}>{friend.username}</Text>)
          })}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFriendsData: () => {
    dispatch(fetchFriends())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends)
