import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../../store'
import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity } from 'react-native'
import styles from '../Style/FriendsListStyles'

class UserFriends extends Component {
  componentDidMount () {
    this.props.fetchFriendsData()
  }
  render () {
    const friends = this.props.friends
    return (
      <ScrollView>
        <View style={styles.container}>
          { friends && friends.map(friend => {
            return (
              <TouchableOpacity
                key={friend.id}
                onPress={() => this.props.sendEdge(friend.id)}>
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
    friends: state.friends
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFriendsData: () => {
    dispatch(fetchFriends())
  },
  sendEdge (userId) {
    console.log(userId)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFriends)
