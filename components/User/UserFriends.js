import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFriends } from '../../store'
import { StyleSheet, Text, ScrollView, View, Image } from 'react-native'
import styles from '../Style/FriendsListStyles'

class UserFriends extends Component {
  componentDidMount () {
    this.props.fetchFriendsData()
  }
  render () {
    const friends = this.props.friends

    console.log('**************', styles)
    return (
      <ScrollView>
        <View style={styles.container}>
          { friends && friends.map(friend => {
            return (<Text key={friend.id}>{friend.username} | {friend.email}</Text>)
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
